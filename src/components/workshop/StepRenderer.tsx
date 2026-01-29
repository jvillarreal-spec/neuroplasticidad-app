import React, { useState } from 'react';
import styles from './StepRenderer.module.css';
import { StepConfig } from '@/types';
import { useWorkshopStore } from '@/store/useWorkshopStore';
import BreathingExercise from './BreathingExercise';
/* eslint-disable @next/next/no-img-element */

interface StepRendererProps {
    step: StepConfig;
}

export default function StepRenderer({ step }: StepRendererProps) {
    const { setResponse, nextStep, addMessage } = useWorkshopStore();
    const [inputValue, setInputValue] = useState('');
    const [listItems, setListItems] = useState<string[]>([]);
    const [inputError, setInputError] = useState('');

    const handleOptionClick = (option: string) => {
        // Quiz Logic
        if (step.type === 'quiz' && step.correctAnswer) {
            if (option !== step.correctAnswer) {
                alert("Esa no es la respuesta correcta basada en la lección. Intenta de nuevo.");
                return;
            } else {
                alert("¡Correcto!");
            }
        }

        setResponse(step.id, option);
        addMessage({ sender: 'user', text: option });

        if (step.id === '1.2' && option === 'No acepto') {
            alert("Es necesario aceptar para continuar.");
            return;
        }
        nextStep();
    };

    const handleNext = () => {
        // Validation
        if (step.validation?.required && !inputValue.trim()) {
            if (step.type !== 'list') { // List validation handled separately
                setInputError("Este campo es obligatorio");
                return;
            }
        }

        if (step.type === 'list') {
            const min = step.validation?.minLength || 0;
            if (listItems.length < min) {
                setInputError(`Mínimo ${min} elementos`);
                return;
            }
        } else if (step.validation?.minLength && inputValue.length < step.validation.minLength) {
            setInputError(`Mínimo ${step.validation.minLength} caracteres`);
            return;
        }

        const value = step.type === 'list' ? listItems : inputValue;

        setResponse(step.id, value);
        if (step.type !== 'text' && step.type !== 'breathing') {
            const msgText = typeof value === 'string' ? value : value.join(', ');
            addMessage({ sender: 'user', text: msgText });
        }

        setInputValue('');
        setListItems([]);
        setInputError('');
        nextStep();
    };

    const addListItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && inputValue.trim()) {
            setListItems([...listItems, inputValue.trim()]);
            setInputValue('');
        }
    };

    return (
        <div className={styles.container}>
            <div><h1 className={styles.title}>{step.title}</h1></div>

            <div className={styles.card}>
                {step.image && (
                    <div style={{ marginBottom: '1.5rem', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                        <img src={step.image} alt={step.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                )}

                <div className={styles.content}>{step.content}</div>

                {/* CHOICE OR QUIZ */}
                {(step.type === 'choice' || step.type === 'quiz') && step.options && (
                    <div className={styles.options}>
                        {step.options.map((opt) => (
                            <button key={opt} className={styles.optionBtn} onClick={() => handleOptionClick(opt)}>
                                {opt}
                            </button>
                        ))}
                    </div>
                )}

                {/* BREATHING */}
                {step.type === 'breathing' && (
                    <BreathingExercise onComplete={nextStep} />
                )}

                {/* INPUT / TEXTAREA */}
                {(step.type === 'input' || step.type === 'textarea') && (
                    <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {step.type === 'textarea' ? (
                            <textarea
                                className="input-premium"
                                rows={4}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Escribe aquí tu respuesta..."
                            />
                        ) : (
                            <input
                                className="input-premium"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Tu respuesta..."
                            />
                        )}
                        {inputError && <span style={{ color: 'hsl(var(--color-error))' }}>{inputError}</span>}
                        <button className="btn-primary" onClick={handleNext}>Siguiente</button>
                    </div>
                )}

                {/* LIST */}
                {step.type === 'list' && (
                    <div style={{ marginTop: '2rem' }}>
                        <div style={{ marginBottom: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {listItems.map((item, idx) => (
                                <span key={idx} style={{
                                    background: 'hsl(var(--color-primary)/0.2)',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '999px',
                                    border: '1px solid hsl(var(--color-primary))'
                                }}>{item}</span>
                            ))}
                        </div>
                        <input
                            className="input-premium"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={addListItem}
                            placeholder="Escribe y presiona Enter para agregar..."
                        />
                        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <p style={{ color: 'hsl(var(--color-text-muted))', fontSize: '0.9rem' }}>
                                Al menos {step.validation?.minLength || 3} elementos.
                            </p>
                            <button className="btn-primary" onClick={handleNext}>Confirmar Lista</button>
                        </div>
                        {inputError && <span style={{ color: 'hsl(var(--color-error))' }}>{inputError}</span>}
                    </div>
                )}

                {/* TEXT ONLY */}
                {step.type === 'text' && (
                    <div style={{ marginTop: '2rem' }}>
                        <button className="btn-primary" onClick={nextStep}>Siguiente</button>
                    </div>
                )}
            </div>
        </div>
    );
}
