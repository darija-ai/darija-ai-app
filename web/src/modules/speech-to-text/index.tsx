import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import AudioPlayer from "./components/AudioPlayer";
import TranscriptEditor from "./components/TranscriptEditor";

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
  const [savedStatus, setSavedStatus] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

  const handleTranscriptUpdate = (newText: string) => {
    setAudioFile({ ...audioFile, editedTranscript: newText });
    setSavedStatus(false);
  };

  const handlePlayToggle = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleTimeUpdate = (time: number) => {
    setCurrentTime(time);
  };

  const handleDurationChange = (duration: number) => {
    setAudioFile((prev) => ({
      ...prev,
      duration,
    }));
  };

  // save function that doesn't work :)
  const saveChanges = () => {
    console.log("Saving changes to the transcript...");
    setTimeout(() => {
      setSavedStatus(true);
    }, 1000);
  };

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
        <AudioPlayer
          audioUrl={audioFile.url}
          isPlaying={isPlaying}
          currentTime={currentTime}
          duration={audioFile.duration}
          onPlayToggle={handlePlayToggle}
          onTimeUpdate={handleTimeUpdate}
          onDurationChange={handleDurationChange}
        />

        <TranscriptEditor
          originalTranscript={audioFile.originalTranscript}
          editedTranscript={audioFile.editedTranscript}
          onTranscriptUpdate={handleTranscriptUpdate}
          isLoading={isLoading}
        />
      </main>
    </div>
  );
};

export default AnnotatorPage;