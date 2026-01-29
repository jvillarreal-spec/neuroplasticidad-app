import React, { useState, useEffect, useRef } from 'react';
import styles from './BreathingExercise.module.css';

interface BreathingExerciseProps {
    onComplete: () => void;
}

export default function BreathingExercise({ onComplete }: BreathingExerciseProps) {
    const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale' | 'ready'>('ready');
    const [cycle, setCycle] = useState(0);
    const [audioEnabled, setAudioEnabled] = useState(true);
    const [debugMsg, setDebugMsg] = useState('');

    const TOTAL_CYCLES = 6;

    // Refs for audio objects (kept around to avoid garbage collection)
    const audioRefs = useRef({
        inhale: typeof window !== 'undefined' ? new Audio('/audio/inhale.m4a') : null,
        hold: typeof window !== 'undefined' ? new Audio('/audio/hold.m4a') : null,
        exhale: typeof window !== 'undefined' ? new Audio('/audio/exhale.m4a') : null
    });

    useEffect(() => {
        // Pre-configure audio
        Object.values(audioRefs.current).forEach(audio => {
            if (audio) {
                audio.preload = 'auto';
            }
        });

        return () => {
            // Stop everything on unmount
            Object.values(audioRefs.current).forEach(audio => {
                if (audio) {
                    audio.pause();
                    audio.currentTime = 0;
                }
            });
        };
    }, []);

    const playFile = (track: 'inhale' | 'hold' | 'exhale') => {
        if (!audioEnabled) return;
        const audio = audioRefs.current[track];
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch(e => {
                console.error("Audio play failed:", e);
                setDebugMsg("Error: " + e.message);
            });
        }
    };

    useEffect(() => {
        if (phase === 'ready') return;
        if (cycle >= TOTAL_CYCLES) {
            onComplete();
            return;
        }

        let timeout: NodeJS.Timeout;

        if (phase === 'inhale') {
            playFile('inhale');
            timeout = setTimeout(() => setPhase('hold'), 4000);
        } else if (phase === 'hold') {
            playFile('hold');
            timeout = setTimeout(() => setPhase('exhale'), 7000);
        } else if (phase === 'exhale') {
            playFile('exhale');
            timeout = setTimeout(() => {
                setCycle(c => c + 1);
                setPhase('inhale');
            }, 8000);
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [phase, cycle, onComplete]);

    const start = () => {
        // UNLOCK STRATEGY: Play all sounds briefly on user interaction
        Object.values(audioRefs.current).forEach(audio => {
            if (audio) {
                audio.muted = true;
                audio.play().then(() => {
                    audio.pause();
                    audio.currentTime = 0;
                    audio.muted = false;
                }).catch(e => console.warn("Unlock failed", e));
            }
        });

        setPhase('inhale');
        setCycle(0);
        setDebugMsg('');
    };

    const testSound = () => {
        setDebugMsg("Probando audio 'Inhala'...");
        const audio = audioRefs.current.inhale;
        if (audio) {
            audio.play().then(() => setDebugMsg("Audio funcionando ✓"))
                .catch(e => setDebugMsg("Fallo: " + e.message));
        }
    };

    const toggleAudio = () => setAudioEnabled(!audioEnabled);

    return (
        <div className={styles.container}>
            {phase === 'ready' ? (
                <div className={styles.intro}>
                    <h2>Respiración 4-7-8</h2>
                    <div style={{ margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                        <label className={styles.audioToggle}>
                            <input
                                type="checkbox"
                                checked={audioEnabled}
                                onChange={toggleAudio}
                                style={{ marginRight: '0.5rem' }}
                            />
                            {audioEnabled ? "Audio Activado 🔊" : "Sin Audio 🔇"}
                        </label>
                        <button className="btn-small" onClick={testSound} style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                            🔔 Probar Audio (Botón de Test)
                        </button>
                    </div>
                    <button className="btn-primary" onClick={start}>Iniciar Ejercicio</button>
                    <p style={{ fontSize: '0.8rem', marginTop: '1rem', opacity: 0.7 }}>
                        Sube el volumen. Usaremos tus archivos: Guía 4-7-8.
                    </p>
                    {debugMsg && <p style={{ color: 'hsl(var(--color-primary))', fontSize: '0.85rem', marginTop: '1rem' }}>{debugMsg}</p>}
                </div>
            ) : (
                <div className={styles.active}>
                    <div className={`${styles.circle} ${styles[phase]}`}>
                        <span className={styles.label}>
                            {phase === 'inhale' && "Inhala (4)"}
                            {phase === 'hold' && "Retén (7)"}
                            {phase === 'exhale' && "Exhala (8)"}
                        </span>
                    </div>
                    <div className={styles.controls}>
                        <button onClick={toggleAudio} className={styles.iconBtn}>
                            {audioEnabled ? "🔊" : "🔇"}
                        </button>
                        <div className={styles.progress}>
                            Ciclo {cycle + 1} / {TOTAL_CYCLES}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
