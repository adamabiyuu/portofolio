import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article
      className="
        group

        flex
        h-full
        flex-col

        overflow-hidden

        rounded-2xl

        border
        border-slate-800

        bg-slate-900/50
        backdrop-blur-sm

        shadow-lg

        transition-all
        duration-300

        hover:-translate-y-2
        hover:border-sky-500/40
        hover:shadow-sky-500/10
      "
    >
      {/* Image */}
      <div
        className="
          aspect-video
          overflow-hidden
          bg-slate-800
        "
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
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
      <div
        className="
          flex
          flex-1
          flex-col

          p-5

          sm:p-6
        "
      >
        <div>
          <h3
            className="
              text-xl
              font-semibold

              text-white
            "
          >
            {project.title}
          </h3>

          <p
            className="
              mt-3

              text-sm
              leading-7

              text-slate-300
            "
          >
            {project.description}
          </p>
        </div>

        {/* Tech */}
        <div
          className="
            mt-6
            flex
            flex-wrap
            gap-2
          "
        >
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full

                border
                border-sky-500/20

                bg-sky-500/10

                px-3
                py-1

                text-xs
                font-medium

                text-sky-400
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div
          className="
            mt-auto

            flex
            flex-col

            gap-3

            pt-6

            sm:flex-row
          "
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              flex-1
              items-center
              justify-center
              gap-2

              rounded-xl

              border
              border-slate-700

              px-4
              py-3

              text-sm
              font-medium

              transition-all
              duration-300

              hover:border-sky-500/40
              hover:bg-slate-800
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
                flex-1
                items-center
                justify-center
                gap-2

                rounded-xl

                bg-sky-500

                px-4
                py-3

                text-sm
                font-medium
                text-white

                transition-all
                duration-300

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
