import { projects } from "@/data/projects";

import ProjectCard from "./ProjectCard";

const ProjectGrid = () => {
  return (
    <div
      className="
        grid
        gap-8
        md:grid-cols-2
      "
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
