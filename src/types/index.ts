export interface Message {
    id: string;
    sender: 'agent' | 'user';
    text: string;
    image?: string; // Support for visual lessons in chat
    timestamp: Date;
}

export interface StepConfig {
    id: string;
    title: string;
    type: 'text' | 'input' | 'textarea' | 'choice' | 'breathing' | 'list' | 'scale' | 'quiz';
    content?: string;
    image?: string;
    agentScript?: string;
    options?: string[];
    correctAnswer?: string; // For quiz steps
    validation?: {
        required?: boolean;
        minLength?: number;
        pattern?: string;
    }
}

export interface ModuleConfig {
    id: number;
    title: string;
    steps: StepConfig[];
}
