import Navbar from "./components/Navbar";
import FloatingHearts from "./components/FloatingHearts";

import HeroSection from "./sections/HeroSection";
import MemoryTimeline from "./sections/MemoryTimeline";
import FinalProposal from "./sections/FinalProposal";
import BackgroundParticles from "./components/BackroundParticles";
import MusicPlayer from "./components/Musicplayer";
import LoveLetter from "./sections/Loveletter";
import GallerySection from "./components/GallerySection";

export default function HomePage() {
  return (
    <main
      id="home"
      className="relative overflow-hidden bg-[#05010d] text-white min-h-screen"
    >
      {/* Navbar */}
      <Navbar />

      {/* Global Background Effects */}
      <BackgroundParticles />
      <FloatingHearts />

      {/* Music */}
      <MusicPlayer />

      {/* Sections */}
      <HeroSection />

      <MemoryTimeline />

      <LoveLetter />

      <GallerySection />

      <FinalProposal />
    </main>
  );
}
