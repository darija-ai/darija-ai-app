import { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  CheckCircle,
  Eye,
  EyeOff,
} from "lucide-react";

interface AudioFile {
  id: string;
  duration: number;
  url: string;
  originalTranscript: string;
  editedTranscript: string;
}

const AnnotatorPage = () => {
  const [audioFile, setAudioFile] = useState<AudioFile>({
    id: "audio-file",
    duration: 0,
    url: "../../../public/audio.wav",
    originalTranscript: "",
    editedTranscript: "",
  });
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [showOriginal, setShowOriginal] = useState<boolean>(true);
  const [savedStatus, setSavedStatus] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const loadTranscript = async () => {
      try {
        setIsLoading(true);

        const path = "./public/text.txt";
        let text = "";
        const response = await fetch(path);
        if (response.ok) {
          const fetchedText = await response.text();

          text = fetchedText.trim();
          if (text.length > 0) {
            console.log(`Successfully loaded transcript from: ${path}`);
          }
        }

        setAudioFile((prev) => ({
          ...prev,
          originalTranscript: text,
          editedTranscript: text,
        }));

        setIsLoading(false);
      } catch (error) {
        console.error("Error loading transcript:", error);
        // Fallback Arabic text
        setAudioFile((prev) => ({
          ...prev,
          originalTranscript: "",
          editedTranscript: "",
        }));
        setIsLoading(false);
      }
    };

    loadTranscript();
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateDuration = () => {
      setAudioFile((prev) => ({
        ...prev,
        duration: audio.duration,
      }));
    };

    audio.addEventListener("loadedmetadata", updateDuration);
    return () => audio.removeEventListener("loadedmetadata", updateDuration);
  }, []);

  const handleTranscriptUpdate = (newText: string) => {
    setAudioFile({ ...audioFile, editedTranscript: newText });
    setSavedStatus(false);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 5;
    }
  };

  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 5;
    }
  };

  const saveChanges = () => {
    console.log("Saving changes to the transcript...");
    setTimeout(() => {
      setSavedStatus(true);
    }, 1000);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("ended", () => setIsPlaying(false));

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 w-full">
      <header className="bg-white shadow-sm w-full">
        <div className="w-full px-4 py-3 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Audio Transcript Annotator
          </h1>
          <div className="flex items-center">
            <button
              onClick={saveChanges}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              {savedStatus ? (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Saved
                </>
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full px-4 py-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
          <div className="p-6">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-900">Audio</h2>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-6 w-full sm:w-auto justify-center">
                <button
                  onClick={skipBackward}
                  className="p-3 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <SkipBack className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" />
                </button>

                <button
                  onClick={togglePlay}
                  className="p-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-7 h-7 sm:w-8 sm:h-8" />
                  ) : (
                    <Play className="w-7 h-7 sm:w-8 sm:h-8" />
                  )}
                </button>

                <button
                  onClick={skipForward}
                  className="p-3 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <SkipForward className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" />
                </button>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4 w-full">
                <span className="text-sm sm:text-base text-gray-500 w-12 sm:w-16 text-right font-mono">
                  {formatTime(currentTime)}
                </span>

                <div className="relative flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute h-full bg-blue-600 rounded-full transition-all duration-200"
                    style={{
                      width: `${audioFile.duration > 0 ? (currentTime / audioFile.duration) * 100 : 0}%`,
                    }}
                  ></div>
                  <input
                    type="range"
                    min="0"
                    max={audioFile.duration || 100}
                    value={currentTime}
                    onChange={(e) => {
                      const newTime = parseFloat(e.target.value);
                      setCurrentTime(newTime);
                      if (audioRef.current) {
                        audioRef.current.currentTime = newTime;
                      }
                    }}
                    className="absolute inset-0 w-full opacity-0 cursor-pointer"
                  />
                </div>

                <span className="text-sm sm:text-base text-gray-500 w-12 sm:w-16 font-mono">
                  -{formatTime(audioFile.duration || 0)}
                </span>
              </div>
            </div>
          </div>
          <audio ref={audioRef} src={audioFile.url} preload="metadata" />
        </div>

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
                <div className="text-base text-gray-500">
                  Loading transcript...
                </div>
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
                        {audioFile.originalTranscript}
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
                      value={audioFile.editedTranscript}
                      onChange={(e) => handleTranscriptUpdate(e.target.value)}
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
      </main>
    </div>
  );
};

export default AnnotatorPage;
