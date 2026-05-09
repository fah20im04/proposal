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

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-3xl"
          >
            <Image
              src={img}
              alt="memory"
              width={500}
              height={600}
              className="w-full h-[500px] object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
