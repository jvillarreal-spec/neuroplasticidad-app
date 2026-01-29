"use client";
import React, { useEffect, useRef } from 'react';
import MainLayout from "@/components/layout/MainLayout";
import AgentChat from "@/components/chat/AgentChat";
import StepRenderer from "@/components/workshop/StepRenderer";
import { useWorkshopStore } from "@/store/useWorkshopStore";
import { workshopModules } from "@/data/workshopContent";
import styles from '@/components/layout/MainLayout.module.css';

export default function Home() {
  const { currentModule, currentStepIndex, addMessage, messages } = useWorkshopStore();
  const bottomRef = useRef<HTMLDivElement>(null);

  const activeModule = workshopModules.find(m => m.id === currentModule);
  // Fallback to first step if undefined
  const activeStep = activeModule?.steps[currentStepIndex];

  useEffect(() => {
    if (activeStep?.agentScript) {
      // Avoid simple duplicate messages for now by checking the last message
      const lastMsg = messages[messages.length - 1];
      if (lastMsg?.text !== activeStep.agentScript) {
        addMessage({
          sender: 'agent',
          text: activeStep.agentScript
        });
      }
    }
  }, [activeStep, addMessage, messages]);

  // Scroll to bottom whenever messages or active step change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, activeStep]);

  if (!activeStep) {
    return <div className="p-10 text-white">Cargando taller...</div>;
  }

  return (
    <MainLayout>
      <div className={styles.scrollContainer}>
        <AgentChat />
        <div id="active-step-container" style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <StepRenderer step={activeStep} />
        </div>
        <div ref={bottomRef} style={{ height: '10rem' }} />
      </div>
    </MainLayout>
  );
}
