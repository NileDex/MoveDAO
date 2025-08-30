import React, { useState, useRef, useEffect } from 'react';

interface MiniAudioPlayerProps {
  audioSrc: string;
}

const MiniAudioPlayer: React.FC<MiniAudioPlayerProps> = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [autoplayAttempted, setAutoplayAttempted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        return true;
      } catch (error) {
        console.log('Autoplay prevented:', error);
        setIsPlaying(false);
        return false;
      }
    }
    return false;
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        playAudio();
      }
    }
  };

  useEffect(() => {
    if (!autoplayAttempted) {
      setAutoplayAttempted(true);
      
      // Try immediate autoplay
      playAudio();
      
      // If that fails, try after any user interaction
      const handleFirstInteraction = () => {
        if (!isPlaying) {
          playAudio();
        }
        // Remove listeners after first attempt
        document.removeEventListener('click', handleFirstInteraction);
        document.removeEventListener('keydown', handleFirstInteraction);
        document.removeEventListener('scroll', handleFirstInteraction);
      };

      // Add listeners for user interactions
      document.addEventListener('click', handleFirstInteraction);
      document.addEventListener('keydown', handleFirstInteraction);
      document.addEventListener('scroll', handleFirstInteraction);

      return () => {
        document.removeEventListener('click', handleFirstInteraction);
        document.removeEventListener('keydown', handleFirstInteraction);
        document.removeEventListener('scroll', handleFirstInteraction);
      };
    }
  }, [autoplayAttempted, isPlaying]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative">
        {/* Dropdown */}
        {showDropdown && (
          <div className="absolute bottom-full right-0 mb-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-2 min-w-[120px]">
            <div className="flex items-center gap-2 px-2 py-1 hover:bg-white/10 rounded cursor-pointer">
              <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              <span className="text-white text-sm">Spotify</span>
            </div>
          </div>
        )}
        
        {/* Player Controls */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2 flex items-center gap-2">
          <button
            onClick={togglePlay}
            className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
          >
            {isPlaying ? (
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
          
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="w-6 h-6 text-white/70 hover:text-white transition-colors"
          >
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </button>
        </div>
      </div>
      
      <audio 
        ref={audioRef} 
        src={audioSrc} 
        preload="auto" 
        loop 
        playsInline
        muted={false}
      />
    </div>
  );
};

export default MiniAudioPlayer;