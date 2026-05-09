"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useRef, useState, type MouseEvent } from "react";

interface ProposalBoxProps {
  accepted: boolean;
  setAccepted: (value: boolean) => void | any;
}

const ProposalBox = ({ accepted, setAccepted }: ProposalBoxProps) => {
  const [noPosition, setNoPosition] = useState({
    x: 0,
    y: 0,
  });
  const [cardRotation, setCardRotation] = useState({
    x: 0,
    y: 0,
  });
  const cardRef = useRef<HTMLDivElement>(null);

  const moveNoButton = () => {
    const randomX = Math.floor(Math.random() * 250) - 125;
    const randomY = Math.floor(Math.random() * 150) - 75;

    setNoPosition({
      x: randomX,
      y: randomY,
    });
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    setCardRotation({
      x: -y / rect.height * 18,
      y: x / rect.width * 18,
    });
  };

  const resetCardRotation = () => {
    setCardRotation({ x: 0, y: 0 });
  };

  return (
    <div className="perspective-[1200px]">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetCardRotation}
        initial={{ opacity: 0, scale: 0.7, rotateX: -20, rotateY: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotateX: cardRotation.x,
          rotateY: cardRotation.y,
        }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 120,
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-[380px] md:w-[520px] min-h-[420px] rounded-[2.5rem] border border-pink-400/20 bg-white/5 backdrop-blur-2xl overflow-hidden shadow-[0_0_120px_rgba(255,0,170,0.15)]"
      >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-transparent" />

      {/* Floating Light */}
      <div className="absolute top-[-100px] left-[-80px] w-60 h-60 bg-pink-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-100px] right-[-80px] w-60 h-60 bg-purple-500/20 rounded-full blur-3xl" />

      {/* Shine */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-12">
        {/* Heart */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="relative"
        >
          <div className="absolute inset-0 bg-pink-500 blur-3xl opacity-40" />

          <Heart className="relative w-24 h-24 text-pink-400 fill-pink-400 drop-shadow-[0_0_40px_rgba(255,0,170,0.8)]" />
        </motion.div>

        {/* Text */}
        {!accepted ? (
          <>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 text-4xl md:text-5xl font-extrabold leading-tight"
            >
              Will You
              <span className="block bg-gradient-to-r from-pink-300 via-purple-300 to-pink-200 bg-clip-text text-transparent">
                Be Mine?
              </span>
            </motion.h2>

            <p className="mt-6 text-gray-300 leading-8 text-lg max-w-md">
              From the very first moment, you became someone truly special to me
              💖
            </p>

            {/* Buttons */}
            <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <motion.button
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() => setAccepted(true)}
                className="px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 via-pink-400 to-purple-500 text-white font-semibold text-lg shadow-[0_0_40px_rgba(255,0,170,0.5)]"
              >
                YES 💖
              </motion.button>

              <motion.button
                animate={{
                  x: noPosition.x,
                  y: noPosition.y,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
                onMouseEnter={moveNoButton}
                onClick={moveNoButton}
                type="button"
                className="px-8 py-4 rounded-full border border-white/10 bg-white/10 backdrop-blur-md text-gray-200 shadow-lg shadow-black/10"
              >
                NO 😭
              </motion.button>
            </div>
          </>
        ) : (
          <>
            <motion.h2
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
              }}
              className="mt-8 text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent"
            >
              SHE SAID YES 💖
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.5,
              }}
              className="mt-6 text-gray-300 text-xl leading-9"
            >
              A beautiful love story officially begins today ✨
            </motion.p>

            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="mt-10 text-6xl"
            >
              🎉
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
    </div>
  );
};

export default ProposalBox;
