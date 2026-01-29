import { create } from 'zustand';
import { Message } from '@/types';
import { workshopModules } from '@/data/workshopContent';

interface WorkshopState {
    currentModule: number;
    currentStepIndex: number; // Index within the module
    messages: Message[];
    responses: Record<string, any>; // Key: stepId, Value: user response
    isTyping: boolean;

    // Actions
    addMessage: (msg: Omit<Message, 'id' | 'timestamp'>) => void;
    setResponse: (stepId: string, value: any) => void;
    nextStep: () => void;
    prevStep: () => void;
    setTyping: (typing: boolean) => void;
}

const generateId = () => Math.random().toString(36).substring(2, 15);

export const useWorkshopStore = create<WorkshopState>((set) => ({
    currentModule: 1,
    currentStepIndex: 0,
    messages: [],
    responses: {},
    isTyping: false,

    addMessage: (msg) => set((state) => ({
        messages: [...state.messages, { ...msg, id: generateId(), timestamp: new Date() }]
    })),

    setResponse: (stepId, value) => set((state) => ({
        responses: { ...state.responses, [stepId]: value }
    })),

    nextStep: () => set((state) => {
        const modules = workshopModules;
        const activeModule = modules.find((m: any) => m.id === state.currentModule);

        if (!activeModule) return state;

        const currentStep = activeModule.steps[state.currentStepIndex];

        // --- ARCHIVE LOGIC ---
        // If the step we are leaving has content/image, add it to chat history 
        // effectively "persisting" the lesson in the conversation.
        const newMessages = [...state.messages];
        if (currentStep.type === 'text' && (currentStep.content || currentStep.image)) {
            newMessages.push({
                id: generateId(),
                sender: 'agent',
                text: currentStep.content || '',
                image: currentStep.image,
                timestamp: new Date()
            });
        }
        // ---------------------

        if (state.currentStepIndex < activeModule.steps.length - 1) {
            // Next step in same module
            return {
                currentStepIndex: state.currentStepIndex + 1,
                messages: newMessages
            };
        } else {
            // Try next module
            const nextModuleId = state.currentModule + 1;
            const nextModule = modules.find((m: any) => m.id === nextModuleId);

            if (nextModule) {
                return {
                    currentModule: nextModuleId,
                    currentStepIndex: 0,
                    messages: newMessages
                };
            } else {
                // End of workshop
                return { messages: newMessages };
            }
        }
    }),

    prevStep: () => set((state) => ({
        currentStepIndex: Math.max(0, state.currentStepIndex - 1)
    })),

    setTyping: (typing) => set({ isTyping: typing })
}));
