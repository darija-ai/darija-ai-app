import { useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

interface AudioPlayerProps {
  audioUrl: string;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  onPlayToggle: () => void;
  onTimeUpdate: (time: number) => void;
  onDurationChange: (duration: number) => void;
}

const AudioPlayer = ({
  audioUrl,
  isPlaying,
  currentTime,
  duration,
  onPlayToggle,
  onTimeUpdate,
  onDurationChange,
}: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
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

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateDuration = () => {
      onDurationChange(audio.duration);
    };

    audio.addEventListener("loadedmetadata", updateDuration);
    return () => audio.removeEventListener("loadedmetadata", updateDuration);
  }, [onDurationChange]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      onTimeUpdate(audio.currentTime);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("ended", () => {
      onPlayToggle();
    });

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("ended", () => {
        onPlayToggle();
      });
    };
  }, [onPlayToggle, onTimeUpdate]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
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
              aria-label="Skip back 5 seconds"
            >
              <SkipBack className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" />
            </button>

            <button
              onClick={onPlayToggle}
              className="p-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
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
              aria-label="Skip forward 5 seconds"
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
                  width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%`,
                }}
              ></div>
              <input
                type="range"
                min="0"
                max={duration || 100}
                value={currentTime}
                onChange={(e) => {
                  const newTime = parseFloat(e.target.value);
                  onTimeUpdate(newTime);
                  if (audioRef.current) {
                    audioRef.current.currentTime = newTime;
                  }
                }}
                className="absolute inset-0 w-full opacity-0 cursor-pointer"
                aria-label="Audio progress"
              />
            </div>

            <span className="text-sm sm:text-base text-gray-500 w-12 sm:w-16 font-mono">
              -{formatTime((duration || 0) - currentTime)}
            </span>
          </div>
        </div>
      </div>

      <audio ref={audioRef} src={audioUrl} preload="metadata" />
    </div>
  );
};

export default AudioPlayer;