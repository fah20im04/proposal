"use client";

import { motion } from "framer-motion";

const IntroText = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="text-center px-6"
    >
      <h1 className="text-5xl md:text-7xl font-bold leading-tight">
        Someone Has
        <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Something Special
        </span>
        For You
      </h1>

      <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
        A little journey made with love, memories, and emotions.
      </p>
    </motion.div>
  );
};

export default IntroText;
