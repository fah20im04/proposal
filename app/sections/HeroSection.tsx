import HeroScene from "../components/HeroScene";
import IntroText from "../components/IntroText";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <HeroScene />

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <IntroText />
      </div>
    </section>
  );
};

export default HeroSection;