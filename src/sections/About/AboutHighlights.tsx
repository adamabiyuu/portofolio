import { CheckCircle2 } from "lucide-react";

const highlights = ["Responsive Web Development", "Clean & Maintainable Code", "REST API Integration", "Continuous Learning"];

const AboutHighlights = () => {
  return (
    <div
      className="
        grid
        gap-4

        sm:grid-cols-2
      "
    >
      {highlights.map((item) => (
        <div
          key={item}
          className="
            flex
            items-center
            gap-3

            rounded-xl

            border
            border-slate-800

            bg-slate-900/40

            px-4
            py-3

            transition-all
            duration-300

            hover:-translate-y-1
            hover:border-sky-500/40
            hover:bg-slate-900
          "
        >
          <CheckCircle2
            size={20}
            className="
              shrink-0
              text-sky-500
            "
          />

          <span
            className="
              text-sm
              text-slate-200

              sm:text-base
            "
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  );
};

export default AboutHighlights;
