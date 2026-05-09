"use client";

import { motion } from "framer-motion";
import { memories } from "../lib/constants";

const MemoryTimeline = () => {
  return (
    <section id="memories" className="relative py-32 px-6 max-w-5xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-20">Our Memories</h2>

      <div className="relative space-y-16 pl-10">
        <div className="absolute left-5 top-0 bottom-0 w-1 rounded-full bg-pink-400/20" />

        {memories.map((memory, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md"
          >
            <div className="absolute left-[-26px] top-10 h-6 w-6 rounded-full bg-pink-400 shadow-[0_0_20px_rgba(255,0,170,0.25)]" />
            <h3 className="text-3xl font-semibold text-pink-400">
              {memory.title}
            </h3>

            <p className="mt-4 text-gray-300 text-lg">{memory.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MemoryTimeline;
