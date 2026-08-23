import { useState } from "react";
import Reveal from "@/components/animations/Reveal";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const PROJECT_LIMIT = 4;

const ProjectGrid = () => {
  const [showAll, setShowAll] = useState(false);

  const hasMoreProjects = projects.length > PROJECT_LIMIT;

  const displayedProjects = showAll ? projects : projects.slice(0, PROJECT_LIMIT);

  return (
    <>
      <div
        className="
          grid
          grid-cols-1
          gap-6
          sm:gap-8
          lg:grid-cols-2
        "
      >
        {displayedProjects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      {hasMoreProjects && (
        <div className="mt-10 flex justify-center">
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

export default ProjectGrid;

// import Reveal from "@/components/animations/Reveal";
// import { projects } from "@/data/projects";

// import ProjectCard from "./ProjectCard";

// const ProjectGrid = () => {
//   return (
//     <div
//       className="
//         grid

//         grid-cols-1

//         gap-6

//         sm:gap-8

//         lg:grid-cols-2
//       "
//     >
//       {projects.map((project, index) => (
//         <Reveal key={project.id} delay={index * 0.08}>
//           <ProjectCard project={project} />
//         </Reveal>
//       ))}
//     </div>
//   );
// };

// export default ProjectGrid;
