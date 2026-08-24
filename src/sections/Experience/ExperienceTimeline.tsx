import { useState } from "react";
import Reveal from "@/components/animations/Reveal";
import { experiences } from "@/data/experiences";
import ExperienceItem from "./ExperienceItem";

const EXPERIENCE_LIMIT = 3;

const ExperienceTimeline = () => {
  const [showAll, setShowAll] = useState(false);

  const hasMoreExperiences = experiences.length > EXPERIENCE_LIMIT;

  const displayedExperiences = showAll ? experiences : experiences.slice(0, EXPERIENCE_LIMIT);

  return (
    <>
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
        {displayedExperiences.map((experience, index) => (
          <Reveal key={experience.id} delay={index * 0.1}>
            <ExperienceItem experience={experience} />
          </Reveal>
        ))}
      </div>

      {hasMoreExperiences && (
        <div className="mt-10 flex justify-center sm:mt-12">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="
              rounded-xl
              bg-sky-500
              px-6
              py-3
              text-sm
              font-medium
              text-white
              transition-all
              duration-300
              hover:bg-sky-600
              hover:shadow-lg
              hover:shadow-sky-500/20
            "
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </>
  );
};

export default ExperienceTimeline;
// import Reveal from "@/components/animations/Reveal";
// import { experiences } from "@/data/experiences";

// import ExperienceItem from "./ExperienceItem";

// const ExperienceTimeline = () => {
//   return (
//     <div
//       className="
//         mx-auto

//         mt-12

//         max-w-5xl

//         space-y-10

//         sm:mt-16
//         sm:space-y-12

//         lg:space-y-16
//       "
//     >
//       {experiences.map((experience, index) => (
//         <Reveal key={experience.id} delay={index * 0.1}>
//           <ExperienceItem experience={experience} />
//         </Reveal>
//       ))}
//     </div>
//   );
// };

// export default ExperienceTimeline;
