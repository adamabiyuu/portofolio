import type { Experience } from "@/types/experience";

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  return (
    <div
      className="
        grid
        gap-5

        md:grid-cols-[90px_40px_1fr]
        md:gap-6
      "
    >
      {/* Mobile */}
      <div className="flex items-center gap-3 md:hidden">
        <div
          className="
            h-3
            w-3
            rounded-full
            bg-sky-400
            shadow-[0_0_10px_rgba(56,189,248,0.6)]
          "
        />

        <span className="text-base font-bold text-sky-400">{experience.year}</span>
      </div>

      {/* Desktop Year */}
      <div className="hidden md:block md:text-right">
        <span className="text-lg font-bold text-sky-400">{experience.year}</span>
      </div>

      {/* Desktop Timeline Dot */}
      <div className="hidden justify-center pt-2 md:flex">
        <div
          className="
            h-4
            w-4
            rounded-full
            bg-sky-400
            shadow-[0_0_12px_rgba(56,189,248,0.6)]
          "
        />
      </div>

      {/* Content */}
      <div
        className="
          rounded-2xl

          border
          border-slate-800

          bg-slate-900/40

          p-5

          transition-all
          duration-300

          hover:-translate-y-1
          hover:border-sky-500/30
          hover:bg-slate-900/70

          sm:p-6
        "
      >
        {/* Garis hanya Desktop */}
        <div className="mb-6 hidden h-px w-full bg-slate-700 md:block" />

        <h3
          className="
            text-xl
            font-semibold

            sm:text-2xl
          "
        >
          {experience.position}
        </h3>

        <p className="mt-2 text-sky-400">{experience.company}</p>

        <p className="mt-1 text-sm text-slate-500">{experience.duration}</p>

        <p
          className="
            mt-5

            text-sm
            leading-7

            text-slate-300

            sm:text-base
            sm:leading-8
          "
        >
          {experience.description}
        </p>
      </div>
    </div>
  );
};

export default ExperienceItem;
