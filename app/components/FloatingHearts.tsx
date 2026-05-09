"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const hearts = Array.from({ length: 20 });

const FloatingHearts = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {width > 0 &&
        hearts.map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 100,
              x: Math.random() * width,
            }}
            animate={{
              opacity: [0, 1, 0],
              y: -200,
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute text-pink-400 text-2xl"
          >
            ❤
          </motion.div>
        ))}
    </div>
  );
};

export default FloatingHearts;
