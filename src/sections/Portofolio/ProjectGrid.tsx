import Reveal from "@/components/animations/Reveal";
import { projects } from "@/data/projects";

import ProjectCard from "./ProjectCard";

const ProjectGrid = () => {
  return (
    <div
      className="
        grid

        grid-cols-1

        gap-6

        sm:gap-8

        lg:grid-cols-2
      "
    >
      {projects.map((project, index) => (
        <Reveal key={project.id} delay={index * 0.08}>
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  );
};

export default ProjectGrid;
