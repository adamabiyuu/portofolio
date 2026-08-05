import { techStack } from "@/data/techStack";

const TechStack = () => {
  return (
    <div className="mt-14">
      <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Tech Stack</p>

      <div className="flex flex-wrap gap-5">
        {techStack.map((tech) => {
          const Icon = tech.icon;

          return (
            <div
              key={tech.name}
              title={tech.name}
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-sky-400
                hover:shadow-xl
                border-slate-700
                bg-slate-900
              "
            >
              <Icon size={30} className={tech.color} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
