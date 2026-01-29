import { ModuleConfig } from '@/types';

export const workshopModules: ModuleConfig[] = [
    {
        id: 1,
        title: "Bienvenida y Baseline",
        steps: [
            {
                id: "1.1",
                title: "Bienvenida",
                type: "text",
                content: "Checklist de inicio:\n• 5–10 min por sesión recomendados\n• Guardado automático activado\n• Puedes pausar en cualquier momento",
                agentScript: "Bienvenido a Neuroplasticidad 360. Esto es un taller práctico: vas a escribir respuestas reales. Yo te guío, guardo todo y al final te entrego un PDF con tu trabajo."
            },
            {
                id: "1.2",
                title: "Consentimiento",
                type: "choice",
                content: "Consentimiento informado: Esto no es terapia clínica.\nSi algún ejercicio toca temas sensibles, paramos y lo manejamos con cuidado.",
                agentScript: "Antes de empezar: esto no reemplaza terapia. Si algún ejercicio toca temas sensibles, paramos y lo manejamos con cuidado. ¿Aceptas continuar?",
                options: ["Acepto", "No acepto"]
            },
            {
                id: "1.3",
                title: "Preferencia de Ritmo",
                type: "choice",
                content: "Selecciona tu ritmo de trabajo",
                agentScript: "¿Cómo quieres hacerlo: 7 minutos al día o una sesión larga hoy?",
                options: ["7 min/día", "30–45 min hoy"]
            }
        ]
    },
    {
        id: 2,
        title: "Neurociencia Base",
        steps: [
            {
                id: "2.1",
                title: "El Sistema Nervioso",
                type: "text",
                content: "Tu cuerpo tiene un sistema de comunicación complejo.\n\n• **SNC (Sistema Nervioso Central):** El 'jefe', tu cerebro y médula espinal.\n• **SNA (Sistema Nervioso Autónomo):** Funciona en automático (respirar, latidos, digestión).",
                image: "/nervous_system_diagram_1769396225671.png",
                agentScript: "Primero, entendamos el hardware. Mira la imagen: tienes un sistema central que piensa y uno autónomo que siente y reacciona."
            },
            {
                id: "2.2",
                title: "Los Tres Cerebros",
                type: "text",
                content: "La evolución construyó tu cerebro en capas:\n\n1. **Reptiliano (Rojo):** Instinto puro. Supervivencia. Ahora.\n2. **Límbico (Amarillo):** Emociones. Memorias. Placer/Dolor.\n3. **Neocórtex (Azul):** Razón. Lenguaje. Planificación.",
                image: "/triune_brain_diagram_1769396240971.png",
                agentScript: "Luego están tus 'tres cerebros'. A veces tu instinto (reptil) secuestra a tu razón (neocórtex). Eso es normal."
            },
            {
                id: "2.3",
                title: "Consciente vs Inconsciente",
                type: "text",
                content: "El 95% de lo que eres está bajo el agua.\n\n• **5% Consciente:** Tu voluntad, tus deseos de cambiar.\n• **95% Inconsciente:** Tus hábitos, miedos y programación automática.\n\n**Objetivo del taller:** Usar ese pequeño 5% para reprogramar el enorme 95%.",
                image: "/consciousness_iceberg_1769396254889.png",
                agentScript: "Aquí está la clave de todo: El Iceberg. Tu 5% consciente debe entrenar al 95% inconsciente. ¿Listo para probar si quedó claro?"
            },
            {
                id: "2.4",
                title: "Quiz Rápido",
                type: "quiz",
                content: "¿Cuál es el propósito principal de este taller según la neurociencia?",
                options: [
                    "Eliminar el 95% inconsciente para ser puramente racionales.",
                    "Usar el 5% consciente para reprogramar los patrones del inconsciente.",
                    "Aprender a controlar el sistema autónomo con medicamentos."
                ],
                correctAnswer: "Usar el 5% consciente para reprogramar los patrones del inconsciente.",
                agentScript: "Responde esta pregunta rápida para validar."
            }
        ]
    },
    {
        id: 3,
        title: "Estrés: Eustrés vs Distrés",
        steps: [
            {
                id: "3.1",
                title: "Eustrés vs Distrés",
                type: "text",
                image: "/eustress_vs_distress_comparison_1769396614361.png",
                content: "El estrés no siempre es malo:\n\n• **Eustrés (Positivo):** Te impulsa. Es la energía antes de un partido o proyecto. Te enfoca.\n• **Distrés (Negativo):** Te paraliza. Es ansiedad crónica. Bloquea tu capacidad.",
                agentScript: "No demonices todo el estrés. El 'eustrés' es tu amigo que te ayuda a sacar el trabajo. El 'distrés' es el que debemos gestionar."
            },
            {
                id: "3.2",
                title: "Modo Alerta (Simpático)",
                type: "text",
                image: "/sympathetic_flight_fight_1769396633150.png",
                content: "Tu **Sistema Nervioso Simpático** es tu acelerador.\n\n• Se activa ante el peligro ('Luchar o Huir').\n• Acelera el corazón, dilata pupilas, tensa músculos.\n• Útil para correr de un león, malo para estar sentado en la oficina.",
                agentScript: "Imagina que ves un tigre. Tu cuerpo se enciende: eso es el Simpático. El problema es cuando se enciende por un email."
            },
            {
                id: "3.3",
                title: "Modo Calma (Parasimpático)",
                type: "text",
                image: "/parasympathetic_rest_digest_1769396649037.png",
                content: "Tu **Sistema Nervioso Parasimpático** es tu freno.\n\n• Se encarga de 'Descansar y Digerir'.\n• Baja la frecuencia cardiaca, relaja músculos.\n• Es donde ocurre la recuperación y la creatividad.",
                agentScript: "Este es el estado donde queremos pasar la mayor parte del tiempo: reparando y creando. ¿Cómo lo activamos? Con la respiración."
            },
            {
                id: "3.4",
                title: "El Interruptor: Respiración",
                type: "text",
                content: "Tu respiración es el único sistema autónomo que puedes controlar conscientemente.\n\nAl respirar lento y profundo (especialmente al exhalar largo), le envías una señal física a tu cerebro: 'Estamos a salvo'. Esto activa el Parasimpático al instante.",
                agentScript: "La respiración es el control remoto de tu sistema nervioso. Antes de practicarlo, veamos si quedaron claros los conceptos."
            },
            // Quiz (5 preguntas)
            {
                id: "3.5",
                title: "Quiz: Pregunta 1/5",
                type: "quiz",
                content: "¿Cuál es la diferencia principal entre Eustrés y Distrés?",
                options: [
                    "El Eustrés es negativo y el Distrés positivo.",
                    "El Eustrés impulsa y enfoca; el Distrés paraliza y bloquea.",
                    "Son exactamente lo mismo."
                ],
                correctAnswer: "El Eustrés impulsa y enfoca; el Distrés paraliza y bloquea.",
                agentScript: "Pregunta 1: Diferencia clave."
            },
            {
                id: "3.6",
                title: "Quiz: Pregunta 2/5",
                type: "quiz",
                content: "¿Qué sistema se conoce como 'Luchar o Huir'?",
                options: [
                    "Sistema Parasimpático",
                    "Sistema Simpático",
                    "Sistema Digestivo"
                ],
                correctAnswer: "Sistema Simpático",
                agentScript: "Pregunta 2: ¿Cuál nos acelera?"
            },
            {
                id: "3.7",
                title: "Quiz: Pregunta 3/5",
                type: "quiz",
                content: "¿Qué función tiene el Sistema Parasimpático?",
                options: [
                    "Acelerar el corazón al máximo.",
                    "Generar adrenalina y estrés.",
                    "Descansar, digerir y calmar el cuerpo."
                ],
                correctAnswer: "Descansar, digerir y calmar el cuerpo.",
                agentScript: "Pregunta 3: ¿Cuál nos frena?"
            },
            {
                id: "3.8",
                title: "Quiz: Pregunta 4/5",
                type: "quiz",
                content: "¿Qué herramienta simple activa el Sistema Parasimpático?",
                options: [
                    "La respiración lenta y profunda.",
                    "Beber mucho café.",
                    "Correr lo más rápido posible."
                ],
                correctAnswer: "La respiración lenta y profunda.",
                agentScript: "Pregunta 4: El interruptor."
            },
            {
                id: "3.9",
                title: "Quiz: Pregunta 5/5",
                type: "quiz",
                content: "¿Por qué el sistema Simpático puede ser malo en la vida moderna?",
                options: [
                    "Porque nunca funciona.",
                    "Porque se activa ante peligros físicos reales.",
                    "Porque se activa crónicamente ante estrés mental (emails, tráfico) sin quema física."
                ],
                correctAnswer: "Porque se activa crónicamente ante estrés mental (emails, tráfico) sin quema física.",
                agentScript: "Última pregunta: El contexto moderno."
            }
        ]
    },
    {
        id: 4,
        title: "Ejercicio de Respiración",
        steps: [
            {
                id: "4.1",
                title: "Respiración 4-7-8",
                type: "breathing",
                content: "Sigue la animación. Completaremos 6 ciclos. Usa los audios guía.",
                agentScript: "Hazlo con ojos cerrados si puedes. Yo marco el ritmo con el audio. Son 6 ciclos."
            },
            {
                id: "4.2",
                title: "Chequeo",
                type: "choice",
                content: "¿Cómo te sientes?",
                agentScript: "¿Este ejercicio te hizo sentir mejor?",
                options: ["Sí", "No", "Un poco"]
            },
            {
                id: "4.3",
                title: "Reflexión",
                type: "textarea",
                content: "¿Por qué crees que te sientes así?",
                agentScript: "Cuéntame, ¿por qué crees que te sientes de esa manera?",
                validation: { required: true }
            }
        ]
    },
    {
        id: 5,
        title: "Emociones vs Estados",
        steps: [
            {
                id: "5.1",
                title: "La Tormenta Pasajera (Emociones)",
                type: "text",
                image: "/emotions_comparison.png",
                content: "Una **Emoción** es como una tormenta de verano:\n\n• Intensa\n• Inmediata\n• Corta (dura minutos)\n\nEs una reacción química automática a un estímulo.",
                agentScript: "Piensa en la emoción como el clima de hoy: puede llover un rato, pero pasará rápido."
            },
            {
                id: "5.2",
                title: "El Clima Permanente (Estados)",
                type: "text",
                // image: "/emotional_state_climate.png", // Quota Limit - Placeholder logic
                content: "Un **Estado Emocional** es como el clima de una región:\n\n• Prolongado (Días, Años)\n• Influido por tus pensamientos recurrentes\n• Se convierte en tu personalidad.",
                agentScript: "El estado emocional es diferente. Es si vives en un lugar donde 'siempre llueve' (tristeza crónica) o 'siempre hay sol' (optimismo)."
            },
            {
                id: "5.3",
                title: "El Ciclo: Pensamiento crea Estado",
                type: "text",
                content: "Si tienes pensamientos negativos todo el día, liberas químicos de estrés todo el día. Eso crea un Estado.\n\n**Meta:** Alojar estados positivos permanentes.",
                agentScript: "Tu meta es construir un 'clima interno' agradable, independientemente de las tormentas externas."
            },
            {
                id: "5.4",
                title: "Quiz: Pregunta 1/2",
                type: "quiz",
                content: "¿Cuál dura más tiempo?",
                options: [
                    "Una Emoción (reacción química)",
                    "Un Estado Emocional (patrón de pensamiento)"
                ],
                correctAnswer: "Un Estado Emocional (patrón de pensamiento)",
                agentScript: "Pregunta rápida para diferenciar."
            },
            {
                id: "5.5",
                title: "Quiz: Pregunta 2/2",
                type: "quiz",
                content: "¿Qué influye directamente en la creación de un Estado Emocional?",
                options: [
                    "Lo que comiste ayer.",
                    "Los pensamientos recurrentes y sostenidos.",
                    "El clima exterior."
                ],
                correctAnswer: "Los pensamientos recurrentes y sostenidos.",
                agentScript: "Segunda pregunta sobre el origen."
            },
            {
                id: "5.6",
                title: "Lista de Estados Deseados",
                type: "list",
                content: "Crea una lista de 3 a 5 estados emocionales positivos que deseas alojar en tu cerebro permanentemente.\nEjemplos: Tranquilidad, Entusiasmo, Optimismo.",
                agentScript: "Ahora sí, haz la lista de los estados (clima) que quieres instalar en tu cerebro.",
                validation: { minLength: 3 }
            }
        ]
    },
    {
        id: 6,
        title: "Decisión y Felicidad",
        steps: [
            {
                id: "6.1",
                title: "Motivación",
                type: "textarea",
                content: "Reflexiona sobre tu motivación personal.",
                agentScript: "¿Qué me motiva a tomar la decisión de ser feliz?",
                validation: { required: true, minLength: 50 },
            },
            {
                id: "6.2",
                title: "Definición Personal",
                type: "textarea",
                content: "Define la felicidad en tus propios términos.",
                agentScript: "¿Para ti qué es la felicidad?",
                validation: { required: true }
            }
        ]
    },
    {
        id: 7,
        title: "Autoevaluación",
        steps: [
            {
                id: "7.1",
                title: "Nivel Actual",
                type: "input",
                content: "Evalúa tu nivel actual de felicidad del 1 al 10.",
                agentScript: "¿Cómo evalúas tu nivel de felicidad (1–10)?",
                validation: { required: true, pattern: "^([1-9]|10)$" }
            },
            {
                id: "7.2",
                title: "Sustento",
                type: "textarea",
                content: "¿Por qué elegiste ese número?",
                agentScript: "Sustenta tu respuesta: ¿por qué ese número?",
                validation: { required: true }
            }
        ]
    },
    {
        id: 8,
        title: "Beneficios y Determinación",
        steps: [
            {
                id: "8.1",
                title: "Beneficios Personales",
                type: "textarea",
                content: "Está comprobado que la felicidad mejora la salud, la creatividad y las relaciones.",
                agentScript: "Ahora que conoces evidencias de beneficios, ¿qué beneficios traerá para ti tomar la decisión de ser feliz?",
                validation: { required: true }
            },
            {
                id: "8.2",
                title: "Determinación",
                type: "choice",
                content: "Nivel de compromiso con esta decisión.",
                agentScript: "¿Cómo percibes tu nivel de determinación para tomar la decisión de ser feliz?",
                options: ["Muy alto", "Alto", "Medio", "Bajo", "Muy bajo"]
            },
            {
                id: "8.3",
                title: "Sustento de Determinación",
                type: "textarea",
                content: "Explica brevemente tu nivel de determinación.",
                agentScript: "Sustenta tu respuesta.",
                validation: { required: true }
            }
        ]
    },
    {
        id: 9,
        title: "Gratitud y Rutina",
        steps: [
            {
                id: "9.1",
                title: "Gratitud (Pasado)",
                type: "list",
                content: "Personas, situaciones, logros o cosas de tu pasado.",
                agentScript: "Haz una lista de las personas, situaciones, logros o cosas de tu pasado que te inspiran gratitud.",
                validation: { minLength: 5 }
            },
            {
                id: "9.2",
                title: "Lectura (Opcional)",
                type: "text",
                content: "Lee tu lista mentalmente anteponiendo: 'Me siento muy agradecido por...'",
                agentScript: "Tómate un momento para leerla."
            },
            {
                id: "9.3",
                title: "Gratitud (Presente)",
                type: "list",
                content: "Lo que te inspira gratitud hoy.",
                agentScript: "Ahora haz una lista de lo que te inspira gratitud en el presente.",
                validation: { minLength: 5 }
            },
            {
                id: "9.4",
                title: "Rutina Diaria",
                type: "textarea",
                content: "Planifica tu rutina diaria de agradecimiento:\n• ¿Cuándo? (mañana/noche)\n• ¿Dónde?\n• ¿Cuánto tiempo?\n• ¿Con qué actividad?",
                agentScript: "Describe cómo y dónde vas a hacer tu rutina diaria de agradecimiento.",
                validation: { required: true }
            }
        ]
    },
    {
        id: 10,
        title: "Reencuadre Cognitivo",
        steps: [
            {
                id: "10.1A",
                title: "Evento Tormentoso #1",
                type: "textarea",
                content: "Identifica un evento del pasado que te genere malestar.",
                agentScript: "¿Qué evento de tu pasado te atormenta?",
                validation: { required: true }
            },
            {
                id: "10.1B",
                title: "Reescritura Positiva #1",
                type: "textarea",
                content: "Reescribe el evento desde una visión de aprendizaje o resiliencia. EVITA palabras negativas.",
                agentScript: "Ahora, reescribe el evento desde la visión positiva. Evita cualquier palabra que tenga un contexto negativo.",
                validation: { required: true }
            },
            {
                id: "10.2A",
                title: "Evento Tormentoso #2",
                type: "textarea",
                content: "Identifica un segundo evento.",
                agentScript: "¿Qué otro evento de tu pasado te atormenta?",
                validation: { required: true }
            },
            {
                id: "10.2B",
                title: "Reescritura Positiva #2",
                type: "textarea",
                content: "Reescribe el evento desde una visión positiva.",
                agentScript: "Reescríbelo desde la visión positiva.",
                validation: { required: true }
            },
            {
                id: "10.3A",
                title: "Evento Tormentoso #3",
                type: "textarea",
                content: "Identifica un tercer evento.",
                agentScript: "¿Qué último evento te gustaría trabajar?",
                validation: { required: true }
            },
            {
                id: "10.3B",
                title: "Reescritura Positiva #3",
                type: "textarea",
                content: "Reescribe el evento.",
                agentScript: "Reescríbelo desde la visión positiva.",
                validation: { required: true }
            }
        ]
    },
    {
        id: 11,
        title: "Reencuadre de Relaciones",
        steps: [
            // Persona 1
            {
                id: "11.1A",
                title: "Relación Negativa #1",
                type: "textarea",
                content: "Identifica una persona de tu pasado que te genere pensamientos negativos.",
                agentScript: "¿Qué persona de tu pasado te genera pensamientos negativos?",
                validation: { required: true }
            },
            {
                id: "11.1B",
                title: "Reescritura y Plan #1",
                type: "textarea",
                content: "Reescribe tu relación con esa persona desde visión positiva. Si sigue en tu vida, describe tu plan de administración (límites, frecuencia).",
                agentScript: "Ahora, reescribe tu relación con esa persona desde la visión positiva. Si sigue en tu vida, describe cómo vas a administrar la relación.",
                validation: { required: true }
            },
            // Persona 2
            {
                id: "11.2A",
                title: "Relación Negativa #2",
                type: "textarea",
                content: "Identifica una segunda persona.",
                agentScript: "¿Qué otra persona te genera pensamientos negativos?",
                validation: { required: true }
            },
            {
                id: "11.2B",
                title: "Reescritura y Plan #2",
                type: "textarea",
                content: "Reescribe y planifica.",
                agentScript: "Reescribe y define administración.",
                validation: { required: true }
            },
            {
                id: "11.3",
                title: "Técnica ALTO",
                type: "text",
                content: "Técnica de parada de pensamiento: Cuando vuelva el pensamiento negativo, di mentalmente 'ALTO' y recuerda tu versión positiva inmediatamente.",
                agentScript: "Cuando vuelva el pensamiento: di 'ALTO' y recuerda tu versión positiva."
            }
        ]
    },
    {
        id: 12,
        title: "Futuro: Preocupaciones",
        steps: [
            {
                id: "12.1",
                title: "Lista de Preocupaciones",
                type: "list",
                content: "Enumera los problemas que te preocupan del futuro.",
                agentScript: "Enumera y describe brevemente los problemas que te preocupan del futuro.",
                validation: { minLength: 3 }
            },
            {
                id: "12.2",
                title: "Futuro Deseable",
                type: "textarea",
                content: "Para cada problema listado, describe el escenario probable más optimista (Futuro Deseable).",
                agentScript: "Ahora describe cuál sería el futuro deseable de cada uno.",
                validation: { required: true }
            }
        ]
    },
    {
        id: 13,
        title: "Variables de Control",
        steps: [
            {
                id: "13.1",
                title: "Análisis Problema #1",
                type: "textarea",
                content: "Para tu principal preocupación: \n1. ¿Qué variables puedes controlar? (Tu actitud, acciones)\n2. ¿Qué variables NO puedes controlar? (Clima, decisiones de otros)\n3. Plan para las controlables.",
                agentScript: "¿Qué variables deberíamos intervenir? Define cuáles puedes controlar y cuáles no, y tu plan de acción.",
                validation: { required: true }
            },
            // Repeat for problem 2 and 3 omitted for brevity/prototype limits, but structure allows adding them.
            {
                id: "13.2",
                title: "Análisis Problema #2",
                type: "textarea",
                content: "Repite el análisis para tu segunda preocupación.",
                agentScript: "Haz lo mismo con el segundo problema.",
                validation: { required: true }
            }
        ]
    },
    {
        id: 14,
        title: "Visión Optimista",
        steps: [
            {
                id: "14.1",
                title: "Visión Integral",
                type: "textarea",
                content: "Escribe tu visión optimista en: Económico, Profesional, Personal, Salud y Relaciones.",
                agentScript: "Visión optimista del futuro. Cobre todas las áreas importantes.",
                validation: { required: true }
            },
            {
                id: "14.2",
                title: "Higiene Informativa",
                type: "textarea",
                content: "1. Fuentes a eliminar.\n2. Proceso de verificación de información (buscar 2 fuentes, identificar sesgos).",
                agentScript: "¿Qué fuentes de información debo eliminar de mi vida diaria? ¿Qué proceso usaré para verificar la información?",
                validation: { required: true }
            }
        ]
    },
    {
        id: 15,
        title: "Valores y Hábitos",
        steps: [
            {
                id: "15.1",
                title: "Valores y Virtudes",
                type: "textarea",
                content: "Lista tus principales valores y virtudes. ¿Dónde eres fuerte?",
                agentScript: "¿Cuáles son mis principales valores y virtudes? Sustenta tu respuesta.",
                validation: { required: true }
            },
            {
                id: "15.2",
                title: "Talentos",
                type: "textarea",
                content: "¿En qué puedes ser el mejor del mundo?",
                agentScript: "¿Cuáles son mis principales talentos? ¿En qué puedo ser el mejor del mundo?",
                validation: { required: true }
            },
            {
                id: "15.3",
                title: "Sentido de Vida",
                type: "textarea",
                content: "¿Cuál es el sentido de mi vida?",
                agentScript: "¿Cuál es el sentido de mi vida? Sustenta tu respuesta.",
                validation: { required: true }
            },
            {
                id: "15.4",
                title: "Neurotransmisores",
                type: "text",
                content: "Plan de Activación Química:\n• Dopamina: Completar tareas, celebrar logros.\n• Oxitocina: Abrazos, mascotas, generosidad.\n• Serotonina: Sol, naturaleza, agradecimiento.\n• Endorfinas: Ejercicio, risa, música.",
                agentScript: "Ahora vamos a hackear tus químicos cerebrales."
            },
            {
                id: "15.5",
                title: "Actividades Diarias (Dopamina/Oxitocina/Serotonina/Endorfinas)",
                type: "textarea",
                content: "Registra 2 actividades para cada neurotransmisor que harás esta semana.",
                agentScript: "Define actividades concretas para liberar estos químicos.",
                validation: { required: true }
            },
            {
                id: "15.6",
                title: "Hábitos Saludables (Plan 7 días)",
                type: "textarea",
                content: "Define 1 hábito por eje para empezar:\n1. Salud Física (sueño/ejercicio)\n2. Desarrollo (objetivo corto)\n3. Relaciones (acción social)",
                agentScript: "Ahora lo volvemos operativo. Plan mínimo de hábitos para los próximos 7 días.",
                validation: { required: true }
            },
            {
                id: "15.7",
                title: "Cierre",
                type: "text",
                content: "¡Has completado el taller! Tus respuestas están listas para ser exportadas.",
                agentScript: "Listo. Construiste: decisión, reencuadres, visión optimista y un plan mínimo de hábitos. ¿Exportamos tu PDF?"
            }
        ]
    }
];
