import React from 'react';
import styles from './Roadmap.module.css';
import { workshopModules } from '@/data/workshopContent';
import { useWorkshopStore } from '@/store/useWorkshopStore';

export default function Roadmap() {
    const { currentModule } = useWorkshopStore();

    return (
        <aside className={styles.roadmap}>
            <div className={styles.header}>
                <h3>Mapa del Taller</h3>
                <p>Progreso paso a paso</p>
            </div>
            <div className={styles.list}>
                {workshopModules.map((module) => {
                    const isCurrent = module.id === currentModule;
                    const isCompleted = module.id < currentModule;

                    return (
                        <div
                            key={module.id}
                            className={`${styles.item} ${isCurrent ? styles.active : ''} ${isCompleted ? styles.completed : ''}`}
                        >
                            <div className={styles.icon}>
                                {isCompleted ? '✓' : module.id}
                            </div>
                            <div className={styles.info}>
                                <span className={styles.title}>{module.title}</span>
                                {isCurrent && <span className={styles.badge}>Actual</span>}
                            </div>
                        </div>
                    );
                })}
            </div>
        </aside>
    );
}
