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
        A magical proposal crafted with music, memories, and a heartfelt
        surprise.
      </p>

      <a
        href="#memories"
        className="inline-flex items-center justify-center mt-10 rounded-full border border-white/15 bg-white/10 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-pink-500/10 transition hover:-translate-y-1 hover:bg-pink-500/20"
      >
        Explore the story
      </a>
    </motion.div>
  );
};

export default IntroText;
