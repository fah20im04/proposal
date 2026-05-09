"use client";

import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-5 backdrop-blur-md bg-black/10 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 text-pink-400 font-bold text-xl">
          <Heart className="w-5 h-5 fill-pink-400" />
          Love Story
        </div>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#home" className="transition hover:text-white">
            Home
          </a>
          <a href="#memories" className="transition hover:text-white">
            Memories
          </a>
          <a href="#letter" className="transition hover:text-white">
            Letter
          </a>
          <a href="#proposal" className="transition hover:text-white">
            Proposal
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
