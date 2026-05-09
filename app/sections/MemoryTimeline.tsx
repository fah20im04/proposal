"use client";

import { motion } from "framer-motion";
import { memories } from "../lib/constants";

const MemoryTimeline = () => {
  return (
    <section id="memories" className="relative py-32 px-6 max-w-5xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-20">Our Memories</h2>

      <div className="space-y-16">
        {memories.map((memory, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md"
          >
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
