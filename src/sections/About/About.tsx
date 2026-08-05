import Reveal from "@/components/animations/Reveal";
import Section from "@/components/layout/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import GitHubContribution from "@/components/ui/GitHubContribution";
import useSectionObserver from "@/hooks/useSectionObserver";

import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

const About = () => {
  const ref = useSectionObserver("about");

  return (
    <Section ref={ref} id="about" className="py-24 sm:py-28">
      <SectionTitle title="About Me" subtitle="Get to know me better." />

      <div
        className="
          mt-16

          grid
          items-center

          gap-14

          lg:grid-cols-2
          lg:gap-20
        "
      >
        <Reveal>
          <AboutImage />
        </Reveal>

        <Reveal delay={0.2}>
          <AboutContent />
        </Reveal>
      </div>

      <Reveal delay={0.3}>
        <div
          className="
            mt-20

            flex
            justify-center
          "
        >
          <GitHubContribution />
        </div>
      </Reveal>
    </Section>
  );
};

export default About;
