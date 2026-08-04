import Section from "@/components/layout/Section";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import useSectionObserver from "@/hooks/useSectionObserver";

const Hero = () => {
  const ref = useSectionObserver("home");
  
  return (
    <Section
      ref={ref}
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
      "
    >
      {/* Background Grid */}
      <div
        className="
          absolute
          inset-0
          -z-10
          bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      {/* Left Blur */}
      <div
        className="
          absolute
          -left-40
          top-40
          -z-10
          h-96
          w-96
          rounded-full
          bg-sky-500/20
          blur-[120px]
        "
      />

      {/* Right Blur */}
      <div
        className="
          absolute
          right-0
          top-20
          -z-10
          h-96
          w-96
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      <div className="grid w-full items-center gap-16 lg:grid-cols-2">
        <HeroContent />
        <HeroImage />
      </div>
    </Section>
  );
};

export default Hero;
