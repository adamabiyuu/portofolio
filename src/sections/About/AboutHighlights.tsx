import { CheckCircle2 } from "lucide-react";

const highlights = ["Responsive Web Development", "Clean & Maintainable Code", "REST API Integration", "Continuous Learning"];

const AboutHighlights = () => {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {highlights.map((item) => (
        <div key={item} className="flex items-center gap-3">
          <CheckCircle2 size={20} className="text-sky-500" />

          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default AboutHighlights;
