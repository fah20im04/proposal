"use client";

import { useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

const ProposalButton = () => {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="relative flex flex-col items-center gap-6">
      {accepted && <Confetti />}

      {!accepted ? (
        <>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setAccepted(true)}
            className="px-10 py-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xl font-semibold"
          >
            YES 💖
          </motion.button>

          <motion.button
            whileHover={{
              x: Math.random() * 200 - 100,
              y: Math.random() * 100 - 50,
            }}
            className="px-8 py-4 rounded-full border border-white/20 bg-white/5 text-gray-300"
          >
            NO 😭
          </motion.button>
        </>
      ) : (
        <motion.h2
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-5xl font-bold text-pink-400"
        >
          YAYYYYY 💖
        </motion.h2>
      )}
    </div>
  );
};

export default ProposalButton;
