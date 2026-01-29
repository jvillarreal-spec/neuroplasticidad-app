import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { workshopModules } from '@/data/workshopContent';

const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontFamily: 'Helvetica',
        backgroundColor: '#ffffff'
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
        color: '#0891b2',
        fontWeight: 'bold'
    },
    moduleTitle: {
        fontSize: 18,
        marginTop: 15,
        marginBottom: 10,
        color: '#1e293b',
        fontWeight: 'bold',
        borderBottom: '1px solid #e2e8f0',
        paddingBottom: 5
    },
    stepContainer: {
        marginBottom: 8
    },
    stepTitle: {
        fontSize: 12,
        marginBottom: 2,
        color: '#64748b',
        fontWeight: 'bold'
    },
    answer: {
        fontSize: 12,
        marginBottom: 8,
        lineHeight: 1.4,
        color: '#0f172a'
    }
});

interface PDFDocumentProps {
    responses: Record<string, any>;
}

export const MyDocument = ({ responses }: PDFDocumentProps) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <Text style={styles.header}>Reporte Personal: Neuroplasticidad 360</Text>

            {workshopModules.map((module) => {
                // Check if module has any responses
                const hasResponses = module.steps.some(step => responses[step.id]);
                if (!hasResponses) return null;

                return (
                    <View key={module.id} wrap={false}>
                        <Text style={styles.moduleTitle}>{module.id}. {module.title}</Text>
                        {module.steps.map((step) => {
                            const response = responses[step.id];
                            if (!response) return null;

                            const displayResponse = Array.isArray(response)
                                ? response.map(r => `• ${r}`).join('\n')
                                : String(response);

                            // Skip if it's just a text step with no real input usually, 
                            // but our engine saves step checks as boolean/string sometimes.
                            // We only show if there's content.

                            if (step.type === 'text' || step.type === 'breathing') {
                                // Usually these don't produce user content worth printing unless it's a check
                                // We can skip or show "Completado"
                                return null;
                            }

                            return (
                                <View key={step.id} style={styles.stepContainer}>
                                    <Text style={styles.stepTitle}>{step.title}</Text>
                                    <Text style={styles.answer}>{displayResponse}</Text>
                                </View>
                            );
                        })}
                    </View>
                );
            })}

            <Text style={{ position: 'absolute', bottom: 30, left: 40, right: 40, fontSize: 10, textAlign: 'center', color: '#94a3b8' }}>
                Generado por Antigravity Neuroplasticidad Agent
            </Text>
        </Page>
    </Document>
);
