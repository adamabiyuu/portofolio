import Reveal from "@/components/animations/Reveal";
import { experiences } from "@/data/experiences";

import ExperienceItem from "./ExperienceItem";

const ExperienceTimeline = () => {
  return (
    <div
      className="
        mx-auto

        mt-12

        max-w-5xl

        space-y-10

        sm:mt-16
        sm:space-y-12

        lg:space-y-16
      "
    >
      {experiences.map((experience, index) => (
        <Reveal key={experience.id} delay={index * 0.1}>
          <ExperienceItem experience={experience} />
        </Reveal>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
