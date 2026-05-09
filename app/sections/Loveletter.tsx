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
        className="glass-card max-w-3xl rounded-[2rem] p-10 shadow-[0_0_50px_rgba(255,0,170,0.12)]"
      >
        <h2 className="text-5xl font-bold mb-8 text-center text-pink-400">
          A Letter For You
        </h2>

        <p className="text-lg text-gray-300 leading-9 text-center">
          Every moment with you feels magical. Your smile brightens my darkest
          days, and your presence makes life beautiful. This little website is
          only a small reflection of how special you are.
        </p>

        <p className="mt-8 text-sm uppercase tracking-[0.3em] text-pink-200 text-center">
          With all my love, forever and always.
        </p>
      </motion.div>
    </section>
  );
};

export default LoveLetter;
