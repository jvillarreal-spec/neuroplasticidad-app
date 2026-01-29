"use client";
import React, { useEffect, useRef } from 'react';
import styles from './AgentChat.module.css';
import { useWorkshopStore } from '@/store/useWorkshopStore';

export default function AgentChat() {
    const { messages } = useWorkshopStore();
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className={styles.minimalContainer}>
            {messages.map((msg) => (
                <div
                    key={msg.id}
                    className={`${styles.message} ${msg.sender === 'agent' ? styles.agent : styles.user}`}
                >
                    {msg.image && (
                        <img
                            src={msg.image}
                            alt="Lesson visual"
                            className={styles.messageImage}
                        />
                    )}
                    <div className={styles.text}>{msg.text}</div>
                </div>
            ))}
        </div>
    );
}
