import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface TranscriptEditorProps {
  originalTranscript: string;
  editedTranscript: string;
  onTranscriptUpdate: (newText: string) => void;
  isLoading: boolean;
}

const TranscriptEditor = ({
  originalTranscript,
  editedTranscript,
  onTranscriptUpdate,
  isLoading,
}: TranscriptEditorProps) => {
  const [showOriginal, setShowOriginal] = useState<boolean>(true);
 
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden w-full">
      <div className="px-4 sm:px-6 lg:px-8 py-4 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
          <h3 className="text-lg sm:text-xl font-medium text-gray-900">
            Transcript
          </h3>
          <button
            onClick={() => setShowOriginal(!showOriginal)}
            className="flex items-center text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-50"
          >
            {showOriginal ? (
              <>
                <EyeOff className="w-4 h-4 mr-2" />
                Hide Original
              </>
            ) : (
              <>
                <Eye className="w-4 h-4 mr-2" />
                Show Original
              </>
            )}
          </button>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-6 w-full">
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="text-base text-gray-500">Loading transcript...</div>
          </div>
        ) : (
          <div className="space-y-6 w-full">
            {showOriginal && (
              <div className="w-full">
                <div className="p-4 sm:p-6 bg-gray-50 rounded-lg border border-gray-200 w-full overflow-hidden">
                  <h4 className="text-sm sm:text-base font-medium text-gray-700 mb-3">
                    Original Transcript:
                  </h4>
                  <div
                    className="text-sm sm:text-base text-gray-600 leading-relaxed whitespace-pre-wrap break-words w-full"
                    dir="auto"
                    style={{
                      textAlign: "right",
                      fontFamily:
                        'Arial, "Noto Sans Arabic", "Times New Roman", serif',
                    }}
                  >
                    {originalTranscript}
                  </div>
                </div>
              </div>
            )}

            <div className="w-full">
              <div className="p-4 sm:p-6 bg-white rounded-lg border border-gray-200 w-full overflow-hidden">
                <h4 className="text-sm sm:text-base font-medium mb-3">
                  Edited Transcript:
                </h4>
                <textarea
                  value={editedTranscript}
                  onChange={(e) => onTranscriptUpdate(e.target.value)}
                  className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap break-words w-full min-h-[100px] border-none outline-none focus:ring-0 resize-none"
                  placeholder="اكتب النص المصحح هنا..."
                  dir="auto"
                  style={{
                    textAlign: "right",
                    fontFamily:
                      'Arial, "Noto Sans Arabic", "Times New Roman", serif',
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TranscriptEditor;
