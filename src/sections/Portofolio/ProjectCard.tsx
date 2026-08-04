import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      {/* Image */}
      <div className="aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={project.image}
          alt={project.title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="space-y-5 p-6">
        <div>
          <h3 className="text-xl font-semibold">{project.title}</h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-500">{project.description}</p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                bg-sky-100
                px-3
                py-1
                text-xs
                font-medium
                text-sky-700
                dark:bg-sky-500/10
                dark:text-sky-400
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              border
              border-slate-300
              px-4
              py-2
              text-sm
              transition
              hover:bg-slate-100
              dark:border-slate-700
              dark:hover:bg-slate-800
            "
          >
            <FaGithub />
            Source Code
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-sky-500
                px-4
                py-2
                text-sm
                text-white
                transition
                hover:bg-sky-600
              "
            >
              <FaExternalLinkAlt size={12} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
