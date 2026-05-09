"use client";

import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="text-4xl font-bold text-pink-400"
      >
        Loading Love...
      </motion.h1>
    </div>
  );
};

export default Loader;
