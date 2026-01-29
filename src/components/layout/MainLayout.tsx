"use client";
import React, { useState } from 'react';
import styles from './MainLayout.module.css';
import { useWorkshopStore } from '@/store/useWorkshopStore';
import Roadmap from '@/components/workshop/Roadmap';

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    const { responses, currentModule } = useWorkshopStore();
    const [exporting, setExporting] = useState(false);

    const handleExport = async () => {
        if (Object.keys(responses).length === 0) {
            alert("Aún no tienes respuestas para exportar.");
            return;
        }

        setExporting(true);
        try {
            const res = await fetch('/api/export', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ responses })
            });
            if (res.ok) {
                const blob = await res.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'Neuroplasticidad360_Reporte.pdf';
                a.click();
            } else {
                console.error(await res.text());
                alert("Error generando PDF");
            }
        } catch (e) {
            console.error(e);
            alert("Error de conexión");
        } finally {
            setExporting(false);
        }
    };

    const progress = Math.round(((currentModule - 1) / 15) * 100);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.logo}>Neuroplasticidad 360</div>
                <div className={styles.progress}>Progreso {progress}%</div>
                <div className={styles.actions}>
                    <button className={styles.btnText}>Privacidad</button>
                    <button
                        className={styles.btnSmall}
                        onClick={handleExport}
                        disabled={exporting}
                        style={{ opacity: exporting ? 0.7 : 1, cursor: exporting ? 'wait' : 'pointer' }}
                    >
                        {exporting ? 'Generando...' : 'Exportar PDF'}
                    </button>
                </div>
            </header>

            <div className={styles.mainWrapper}>
                <Roadmap />
                <main className={styles.content}>
                    {children}
                </main>
            </div>

            <footer className={styles.footer}>
                <div className={styles.status}>
                    <span className={styles.saved}>Guardado automático ✓</span>
                </div>
            </footer>
        </div>
    );
}
