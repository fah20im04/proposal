"use client";

import { motion } from "framer-motion";

const LoveLetter = () => {
  return (
    <section
      id="letter"
      className="relative py-32 px-6 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-3xl rounded-3xl border border-pink-400/20 bg-white/5 backdrop-blur-md p-10"
      >
        <h2 className="text-5xl font-bold mb-8 text-center text-pink-400">
          A Letter For You
        </h2>

        <p className="text-lg text-gray-300 leading-9 text-center">
          Every moment with you feels magical. Your smile brightens my darkest
          days, and your presence makes life beautiful. This little website is
          only a small reflection of how special you are.
        </p>
      </motion.div>
    </section>
  );
};

export default LoveLetter;
