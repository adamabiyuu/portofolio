import Section from "@/components/layout/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import useSectionObserver from "@/hooks/useSectionObserver";

import ExperienceTimeline from "./ExperienceTimeline";

const Experience = () => {
  const ref = useSectionObserver("experience");

  return (
    <Section
      ref={ref}
      id="experience"
      className="
        py-20

        sm:py-24

        lg:py-28
      "
    >
      <SectionTitle title="Experience"  />

      <div
        className="
          mt-12

          sm:mt-16
        "
      >
        <ExperienceTimeline />
      </div>
    </Section>
  );
};

export default Experience;
