"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = ["/photos/1.png", "/photos/2.png", "/photos/3.png"];

const GallerySection = () => {
  return (
    <section className="py-32 px-6">
      <h2 className="text-5xl font-bold text-center mb-20">
        Beautiful Memories
      </h2>

      <div className="grid gap-8 max-w-6xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="overflow-hidden rounded-3xl bg-white/5 shadow-[0_0_60px_rgba(255,0,170,0.08)]"
          >
            <Image
              src={img}
              alt={`Memory ${i + 1}`}
              width={700}
              height={900}
              className="w-full aspect-[4/5] object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
