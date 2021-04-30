import { useState, useEffect } from 'react';

const useAudio = (src: string) => {
  const [audio] = useState(new Audio(src));
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSound = () => setIsPlaying(!isPlaying);

  useEffect(() => {
    if (isPlaying) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]);

  useEffect(() => {
    audio.addEventListener('ended', () => setIsPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, [audio]);

  return [isPlaying, toggleSound] as const;
};

export default useAudio;
