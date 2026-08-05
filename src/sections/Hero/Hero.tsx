import Reveal from "@/components/animations/Reveal";
import Section from "@/components/layout/Section";
import useSectionObserver from "@/hooks/useSectionObserver";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

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
        pt-20
        sm:pt-24
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

      {/* Left Glow */}
      <div
        className="
          absolute
          -left-40
          top-24
          -z-10
          h-72
          w-72
          rounded-full
          bg-sky-500/20
          blur-[120px]

          sm:h-80
          sm:w-80

          lg:h-96
          lg:w-96
        "
      />

      {/* Right Glow */}
      <div
        className="
          absolute
          -right-32
          top-20
          -z-10
          h-72
          w-72
          rounded-full
          bg-cyan-500/10
          blur-[120px]

          sm:h-80
          sm:w-80

          lg:h-96
          lg:w-96
        "
      />

      <div
        className="
    grid
    w-full
    items-center
    gap-12

    lg:grid-cols-2
    lg:gap-20
  "
      >
        <div className="order-1 lg:order-2">
          <Reveal delay={0.2}>
            <HeroImage />
          </Reveal>
        </div>

        <div className="order-2 lg:order-1">
          <Reveal>
            <HeroContent />
          </Reveal>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
