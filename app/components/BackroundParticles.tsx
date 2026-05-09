"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ParticleCount = 30;

const BackgroundParticles = () => {
  const [particles, setParticles] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: ParticleCount }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));

    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/30 rounded-full"
          initial={{
            opacity: 0,
            x: p.x,
            y: p.y,
          }}
          animate={{
            y: p.y - 200,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundParticles;
