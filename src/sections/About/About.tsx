import Section from "@/components/layout/Section";

import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";
import SectionTitle from "@/components/ui/SectionTitle";
import useSectionObserver from "@/hooks/useSectionObserver";

const About = () => {
  const ref = useSectionObserver("about");
  
  return (
    <Section ref={ref} id="about" >
      <SectionTitle title="About Me" subtitle="Get to know me better." />

      <div className="grid items-center gap-16 lg:grid-cols-2">
        <AboutImage />

        <AboutContent />
      </div>
    </Section>
  );
};

export default About;
