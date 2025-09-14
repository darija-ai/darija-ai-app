import { useState, useRef } from 'react';
import { Play, Pause, Volume2, FileText, Edit3, Save, SkipForward } from 'lucide-react';
import { SkipDialog } from './skip-dialog';
import { ArabicKeyboard, KeyboardToggleButton } from './arabic-keyboard';

export function AnnotationInterface() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [annotation, setAnnotation] = useState('');
  const [hasChanges, setHasChanges] = useState(false);
  const [isSkipDialogOpen, setIsSkipDialogOpen] = useState(false);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const modelOutput = "This is the model's transcription or output text that appears here for reference. The user can see what the model generated but cannot edit this content directly.";

  const sampleAudioUrl = "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav";

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
        // Delete character before cursor
        const newValue = currentValue.slice(0, start - 1) + currentValue.slice(start);
        setAnnotation(newValue);
        setHasChanges(newValue.trim() !== '');
        
        // Set cursor position after state update
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = start - 1;
        }, 0);
      } else if (start !== end) {
        // Delete selected text
        const newValue = currentValue.slice(0, start) + currentValue.slice(end);
        setAnnotation(newValue);
        setHasChanges(newValue.trim() !== '');
        
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = start;
        }, 0);
      }
    } else {
      // Insert character at cursor position
      const newValue = currentValue.slice(0, start) + key + currentValue.slice(end);
      setAnnotation(newValue);
      setHasChanges(newValue.trim() !== '');
      
      // Set cursor position after the inserted character
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + key.length;
      }, 0);
    }

    // Focus the textarea to maintain cursor visibility
    textarea.focus();
  };
  const handleSaveAnnotation = () => {
    console.log('Saving annotation:', annotation);
    // Here you would typically send the annotation to your backend
    alert('Annotation saved successfully!');
    setHasChanges(false);
  };

  const handleSkipConfirm = (reason: string) => {
    console.log('Skipping with reason:', reason);
    // Here you would typically log the skip reason and move to next item
    alert(`Annotation skipped. Reason: ${reason}`);
    setIsSkipDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-6">
            <h1 className="text-2xl font-bold text-white flex items-center gap-3">
              <FileText size={28} />
              Model Output Annotation
            </h1>
            <p className="text-blue-100 mt-2">Review and annotate the model's output</p>
          </div>

          <div className="p-8 space-y-8">
            {/* Audio Player Section */}
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

            {/* Model Output Section */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <FileText size={20} />
                Model Output
              </h2>
              <textarea
                value={modelOutput}
                disabled
                className="w-full h-32 p-4 border border-gray-300 rounded-xl bg-gray-50 text-gray-600 resize-none cursor-not-allowed"
                placeholder="Model output will appear here..."
              />
            </div>

            {/* Annotation Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
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
                  className="w-full h-40 p-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none text-right"
                  dir="rtl"
                />
                <div className="absolute bottom-3 right-3 text-sm text-gray-400">
                  {annotation.length} characters
                </div>
              </div>
              
              <ArabicKeyboard
                isVisible={isKeyboardVisible}
                onToggle={() => setIsKeyboardVisible(!isKeyboardVisible)}
                onKeyPress={handleKeyPress}
              />
            </div>

            {/* Action Buttons */}
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
        </div>
      </div>

      <SkipDialog
        isOpen={isSkipDialogOpen}
        onClose={() => setIsSkipDialogOpen(false)}
        onConfirm={handleSkipConfirm}
      />
    </div>
  );
}