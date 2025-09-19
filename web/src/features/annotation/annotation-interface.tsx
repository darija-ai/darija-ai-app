import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, FileText, Edit3, Save, SkipForward } from 'lucide-react';
import { SkipDialog } from './skip-dialog';
import { ArabicKeyboard, KeyboardToggleButton } from './arabic-keyboard';
import { annotationData, AnnotationItem } from './data';

interface AnnotationInterfaceProps {
    taskId?: number;
}

export function AnnotationInterface({ taskId }: AnnotationInterfaceProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [annotation, setAnnotation] = useState('');
    const [hasChanges, setHasChanges] = useState(false);
    const [isSkipDialogOpen, setIsSkipDialogOpen] = useState(false);
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const [currentTask, setCurrentTask] = useState<AnnotationItem | null>(null);
    const audioRef = useRef<HTMLAudioElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Load task data based on taskId
    useEffect(() => {
        if (taskId) {
            const task = annotationData.find(item => item._id === taskId);
            setCurrentTask(task || null);
            
            // Pre-fill annotation with model output if available
            if (task) {
                if (task.type === "SPEECH_TO_TEXT" && task.speechToText) {
                    setAnnotation(task.speechToText.modelOutput);
                } else if (task.type === "TEXT_TO_TEXT" && task.textToText) {
                    setAnnotation(task.textToText.modelOutput || '');
                }
            }
        } else {
            // Default fallback
            setCurrentTask(null);
            setAnnotation("This is the model's transcription or output text that appears here for reference. The user can see what the model generated but cannot edit this content directly.");
        }
    }, [taskId]);

    const modelOutput = currentTask?.type === "SPEECH_TO_TEXT" 
        ? currentTask.speechToText?.modelOutput || "No model output available"
        : currentTask?.type === "TEXT_TO_TEXT"
        ? currentTask.textToText?.modelOutput || "No model output available"
        : "This is the model's transcription or output text that appears here for reference. The user can see what the model generated but cannot edit this content directly.";

    const sampleAudioUrl = currentTask?.type === "SPEECH_TO_TEXT" 
        ? currentTask.speechToText?.audioURL || "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
        : "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav";

    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleAnnotationChange = (value: string) => {
        setAnnotation(value);
        setHasChanges(value.trim() !== '');
    };

    const handleKeyPress = (key: string) => {
        if (!textareaRef.current) return;

        const textarea = textareaRef.current;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const currentValue = annotation;

        if (key === 'BACKSPACE') {
            if (start === end && start > 0) {
                const newValue = currentValue.slice(0, start - 1) + currentValue.slice(start);
                setAnnotation(newValue);
                setHasChanges(newValue.trim() !== '');

                setTimeout(() => {
                    textarea.selectionStart = textarea.selectionEnd = start - 1;
                }, 0);
            } else if (start !== end) {
                const newValue = currentValue.slice(0, start) + currentValue.slice(end);
                setAnnotation(newValue);
                setHasChanges(newValue.trim() !== '');

                setTimeout(() => {
                    textarea.selectionStart = textarea.selectionEnd = start;
                }, 0);
            }
        } else {
            const newValue = currentValue.slice(0, start) + key + currentValue.slice(end);
            setAnnotation(newValue);
            setHasChanges(newValue.trim() !== '');

            setTimeout(() => {
                textarea.selectionStart = textarea.selectionEnd = start + key.length;
            }, 0);
        }

        textarea.focus();
    };

    const handleSaveAnnotation = () => {
        console.log('Saving annotation:', annotation);
        alert('Annotation saved successfully!');
        setHasChanges(false);
    };

    const handleSkipConfirm = (reason: string) => {
        console.log('Skipping with reason:', reason);
        alert(`Annotation skipped. Reason: ${reason}`);
        setIsSkipDialogOpen(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br py-8">
            <div className="p-8 space-y-8">
                {/* Task Header */}
                {currentTask && (
                    <div className="bg-white rounded-xl p-6 shadow-sm border">
                        <div className="flex items-start justify-between">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                                    {currentTask.title}
                                </h1>
                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                        currentTask.type === "SPEECH_TO_TEXT" 
                                            ? "bg-blue-100 text-blue-800" 
                                            : "bg-green-100 text-green-800"
                                    }`}>
                                        {currentTask.type === "SPEECH_TO_TEXT" ? "Speech to Text" : "Text to Text"}
                                    </span>
                                    <span>Assigned by: <strong>{currentTask.assignedBy}</strong></span>
                                    <span>Deadline: <strong>{currentTask.deadline}</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                
                {currentTask?.type === "SPEECH_TO_TEXT" && (
                    <div className="bg-gray-50 rounded-xl p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <Volume2 size={20} />
                            Audio Sample
                        </h2>
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={togglePlayPause}
                                className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg"
                            >
                                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                            </button>
                            <audio
                                ref={audioRef}
                                src={sampleAudioUrl}
                                onEnded={() => setIsPlaying(false)}
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                                className="flex-1"
                                controls
                            />
                        </div>
                    </div>
                )}

                {currentTask?.type === "TEXT_TO_TEXT" && currentTask.textToText?.inputText && (
                    <div className="bg-gray-50 rounded-xl p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <FileText size={20} />
                            Input Text
                        </h2>
                        <div className="p-4 bg-white rounded-lg border">
                            <p className="text-gray-800 text-right" dir="rtl">
                                {currentTask.textToText.inputText}
                            </p>
                        </div>
                    </div>
                )}

                <div className="border-t border-gray-200"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-6 lg:order-1">
                        <div className="flex items-center justify-between min-h-[2.5rem]">
                            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                                <Edit3 size={20} />
                                Your Annotation
                            </h2>
                            <KeyboardToggleButton
                                onClick={() => setIsKeyboardVisible(!isKeyboardVisible)}
                                isVisible={isKeyboardVisible}
                            />
                        </div>
                        <div className="relative">
                            <textarea
                                ref={textareaRef}
                                value={annotation}
                                onChange={(e) => handleAnnotationChange(e.target.value)}
                                placeholder="Enter your annotation or corrections here..."
                                className="w-full h-40 lg:h-48 p-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none text-right"
                                dir="rtl"
                            />
                            <div className="absolute bottom-3 right-3 text-sm text-gray-400">
                                {annotation.length} characters
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 lg:order-2">
                        <div className="min-h-[2.5rem] flex items-center">
                            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                                <FileText size={20} />
                                Model Output
                            </h2>
                        </div>
                        <textarea
                            value={modelOutput}
                            disabled
                            className="w-full h-40 lg:h-48 p-4 border-2 border-gray-300 rounded-xl bg-gray-50 text-gray-600 resize-none cursor-not-allowed"
                            placeholder="Model output will appear here..."
                        />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                    <button
                        onClick={handleSaveAnnotation}
                        disabled={!hasChanges}
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-green-600 text-white rounded-xl hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium shadow-lg"
                    >
                        <Save size={20} />
                        Annotate
                    </button>

                    <button
                        onClick={() => setIsSkipDialogOpen(true)}
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-amber-600 text-white rounded-xl hover:bg-amber-700 transition-colors font-medium shadow-lg"
                    >
                        <SkipForward size={20} />
                        Skip Annotation
                    </button>
                </div>
            </div>

            <ArabicKeyboard
                isVisible={isKeyboardVisible}
                onToggle={() => setIsKeyboardVisible(!isKeyboardVisible)}
                onKeyPress={handleKeyPress}
            />

            <SkipDialog
                isOpen={isSkipDialogOpen}
                onClose={() => setIsSkipDialogOpen(false)}
                onConfirm={handleSkipConfirm}
            />
        </div>
    );
}