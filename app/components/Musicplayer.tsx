"use client";

import { useRef, useState } from "react";
import { Pause, Play, Music2 } from "lucide-react";
import { motion } from "framer-motion";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
      {/* Audio */}
      <audio ref={audioRef} loop>
        <source src="/music/romantic.mp3" type="audio/mp3" />
      </audio>

      {/* Music Card */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed bottom-6 right-6 z-[999] flex items-center gap-4 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl px-5 py-4 shadow-2xl"
      >
        {/* Text */}
        <div className="flex items-center gap-2">
          <Music2 className="w-5 h-5 text-pink-400" />

          <div>
            <h2 className="text-sm font-semibold text-white">Romantic Music</h2>

            <p className="text-xs text-gray-300">Click to play</p>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={toggleMusic}
          className="flex items-center justify-center rounded-full bg-pink-500 p-3 text-white hover:scale-110 transition"
        >
          {playing ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" />
          )}
        </button>
      </motion.div>
    </>
  );
};

export default MusicPlayer;
