interface SpeechToTextAnnotation {
    correctedText: string;
    annotatedBy: string;
    annotatedAt: string;
}

interface SpeechToTextData {
    audioURL: string;
    modelOutput: string;
    annotations: SpeechToTextAnnotation[];
}

interface TextToTextData {
    inputText?: string;
    modelOutput?: string;
    annotations?: any[];
}

export type AnnotationType = "SPEECH_TO_TEXT" | "TEXT_TO_TEXT";

export interface AnnotationItem {
    _id: number;
    title: string;
    assignedTo: string;
    assignedBy: string;
    deadline: string;
    type: AnnotationType;
    speechToText: SpeechToTextData | null;
    textToText: TextToTextData | null;
}

export const annotationData: AnnotationItem[] = [
    {
        _id: 1,
        title: "Arabic Speech Recognition Task",
        assignedTo: "El Mehdi Laidoudi",
        assignedBy: "Dr. Cavalli",
        deadline: "2025/9/19",
        type: "SPEECH_TO_TEXT", 
        speechToText: {
            audioURL: "https://res.cloudinary.com/dq5tjngtn/video/upload/v1757980539/audio_1_gjtlmt.wav",
            modelOutput: "المدينة ديالنا",
            annotations: [
                {
                    correctedText: "المدينة ديالها",    
                    annotatedBy: "El Mehdi",
                    annotatedAt: "2025-09-14T16:03:06.102+00:00",
                    status: ,
                },
                {
                    correctedText: "المدينة ديالها",    
                    annotatedBy: "El Mehdi",
                    annotatedAt: "2025-09-14T16:03:06.102+00:00",
                    status: true,
                    reason: "Unintelligible audi`"
                }
            ] 
        },
        textToText: null, 
    },
    {
        _id: 2,
        title: "Darija Text Correction",
        assignedTo: "Sara Ahmed",
        assignedBy: "Dr. Cavalli",
        deadline: "2025/9/25",
        type: "TEXT_TO_TEXT",
        speechToText: null,
        textToText: {
            inputText: "كيفاش راك اليوم؟",
            modelOutput: "كيف حالك اليوم؟",
            annotations: []
        }
    },
    {
        _id: 3,
        title: "Audio Transcription - News",
        assignedTo: "Ahmed Benali",
        assignedBy: "Prof. Hassan",
        deadline: "2025/9/18",
        type: "SPEECH_TO_TEXT",
        speechToText: {
            audioURL: "https://example.com/audio2.wav",
            modelOutput: "الأخبار ديال اليوم",
            annotations: [
                {
                    correctedText: "أخبار اليوم",
                    annotatedBy: "Ahmed",
                    annotatedAt: "2025-09-15T10:30:00.000+00:00"
                },
                {
                    correctedText: "الأخبار ديال اليوم مهمة",
                    annotatedBy: "Ahmed", 
                    annotatedAt: "2025-09-15T11:00:00.000+00:00"
                }
            ]
        },
        textToText: null
    },
    {
        _id: 4,
        title: "Dialect Translation Review",
        assignedTo: "Fatima Zahra",
        assignedBy: "Dr. Cavalli",
        deadline: "2025/9/30",
        type: "TEXT_TO_TEXT",
        speechToText: null,
        textToText: {
            inputText: "واش غادي تجي معايا؟",
            modelOutput: "هل ستأتي معي؟",
            annotations: []
        }
    },
    {
        _id: 5,
        title: "Podcast Transcription",
        assignedTo: "Omar Khalil",
        assignedBy: "Prof. Hassan",
        deadline: "2025/9/22",
        type: "SPEECH_TO_TEXT",
        speechToText: {
            audioURL: "https://example.com/podcast.wav",
            modelOutput: "هاد البودكاست",
            annotations: []
        },
        textToText: null
    },
    {
        _id: 6,
        title: "Social Media Text Analysis",
        assignedTo: "Leila Mansouri",
        assignedBy: "Dr. Cavalli",
        deadline: "2025/10/5",
        type: "TEXT_TO_TEXT",
        speechToText: null,
        textToText: {
            inputText: "ماشي مشكل، غانشوفو",
            modelOutput: "ليس مشكلة، سنرى",
            annotations: []
        }
    },
    {
        _id: 7,
        title: "Interview Audio Processing",
        assignedTo: "Youssef Idrissi",
        assignedBy: "Prof. Hassan",
        deadline: "2025/9/20",
        type: "SPEECH_TO_TEXT",
        speechToText: {
            audioURL: "https://example.com/interview.wav",
            modelOutput: "المقابلة كانت زوينة",
            annotations: [
                {
                    correctedText: "المقابلة كانت جميلة",
                    annotatedBy: "Youssef",
                    annotatedAt: "2025-09-16T09:15:00.000+00:00"
                }
            ]
        },
        textToText: null
    },
    {
        _id: 8,
        title: "Chat Messages Correction",
        assignedTo: "Nadia Berrada",
        assignedBy: "Dr. Cavalli",
        deadline: "2025/9/28",
        type: "TEXT_TO_TEXT",
        speechToText: null,
        textToText: {
            inputText: "والو، ماكاين والو",
            modelOutput: "لا شيء، لا يوجد شيء",
            annotations: []
        }
    },
    {
        _id: 9,
        title: "Radio Show Transcription",
        assignedTo: "Karim Alami",
        assignedBy: "Prof. Hassan",
        deadline: "2025/10/1",
        type: "SPEECH_TO_TEXT",
        speechToText: {
            audioURL: "https://example.com/radio.wav",
            modelOutput: "البرنامج الإذاعي",
            annotations: []
        },
        textToText: null
    },
    {
        _id: 10,
        title: "Literature Text Modernization",
        assignedTo: "Aicha Bennani",
        assignedBy: "Dr. Cavalli",
        deadline: "2025/10/8",
        type: "TEXT_TO_TEXT",
        speechToText: null,
        textToText: {
            inputText: "هاد الكتاب زوين بزاف",
            modelOutput: "هذا الكتاب جميل جداً",
            annotations: []
        }
    },
    {
        _id: 11,
        title: "Street Interview Audio",
        assignedTo: "Rachid Tazi",
        assignedBy: "Prof. Hassan",
        deadline: "2025/9/24",
        type: "SPEECH_TO_TEXT",
        speechToText: {
            audioURL: "https://example.com/street.wav",
            modelOutput: "الناس فالزنقة",
            annotations: []
        },
        textToText: null
    },
    {
        _id: 12,
        title: "SMS Text Analysis",
        assignedTo: "Hanane Chakir",
        assignedBy: "Dr. Cavalli",
        deadline: "2025/10/3",
        type: "TEXT_TO_TEXT",
        speechToText: null,
        textToText: {
            inputText: "بلاتي نسيت نجي",
            modelOutput: "لقد نسيت أن آتي",
            annotations: []
        }
    }
];