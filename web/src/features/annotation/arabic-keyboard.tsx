import { Keyboard, X } from 'lucide-react';

interface ArabicKeyboardProps {
  isVisible: boolean;
  onToggle: () => void;
  onKeyPress: (key: string) => void;
}

export function ArabicKeyboard({ isVisible, onToggle, onKeyPress }: ArabicKeyboardProps) {
  const arabicLetters = [
    ['ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح', 'ج', 'د'],
    ['ش', 'س', 'ي', 'ب', 'ل', 'ا', 'ت', 'ن', 'م', 'ك', 'ط'],
    ['ئ', 'ء', 'ؤ', 'ر', 'لا', 'ى', 'ة', 'و', 'ز', 'ظ'],
  ];

  const numbers = ['١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩', '٠'];
  const punctuation = ['،', '؛', '؟', '!', '.', ':', '"', '(', ')', '-'];

  const handleKeyClick = (key: string) => {
    onKeyPress(key);
  };

  const handleSpecialKey = (action: string) => {
    switch (action) {
      case 'space':
        onKeyPress(' ');
        break;
      case 'backspace':
        onKeyPress('BACKSPACE');
        break;
      case 'enter':
        onKeyPress('\n');
        break;
    }
  };

  if (!isVisible) return null;

  return (
    <div className="mt-4 bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <Keyboard size={20} />
            Arabic Keyboard
          </h3>
          <button
            onClick={onToggle}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Numbers Row */}
        <div className="mb-3">
          <div className="flex flex-wrap gap-1 justify-center">
            {numbers.map((num) => (
              <button
                key={num}
                onClick={() => handleKeyClick(num)}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded text-lg font-medium transition-colors"
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Arabic Letters */}
        <div className="mb-3 space-y-1">
          {arabicLetters.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap gap-1 justify-center">
              {row.map((letter) => (
                <button
                  key={letter}
                  onClick={() => handleKeyClick(letter)}
                  className="w-10 h-10 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded text-lg font-medium transition-colors"
                >
                  {letter}
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* Punctuation Row */}
        <div className="mb-3">
          <div className="flex flex-wrap gap-1 justify-center">
            {punctuation.map((punct) => (
              <button
                key={punct}
                onClick={() => handleKeyClick(punct)}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded text-lg font-medium transition-colors"
              >
                {punct}
              </button>
            ))}
          </div>
        </div>

        {/* Special Keys */}
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => handleSpecialKey('backspace')}
            className="px-4 py-2 bg-red-100 hover:bg-red-200 border border-red-300 rounded text-sm font-medium transition-colors"
          >
            ⌫ Backspace
          </button>
          <button
            onClick={() => handleSpecialKey('space')}
            className="px-8 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded text-sm font-medium transition-colors"
          >
            Space
          </button>
          <button
            onClick={() => handleSpecialKey('enter')}
            className="px-4 py-2 bg-green-100 hover:bg-green-200 border border-green-300 rounded text-sm font-medium transition-colors"
          >
            ↵ Enter
          </button>
        </div>
      </div>
    </div>
  );
}

export function KeyboardToggleButton({ onClick, isVisible }: { onClick: () => void; isVisible: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
        isVisible
          ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
      title={isVisible ? "Hide Arabic Keyboard" : "Show Arabic Keyboard"}
    >
      <Keyboard size={16} />
      {isVisible ? 'Hide Keyboard' : 'Show Keyboard'}
    </button>
  );
}