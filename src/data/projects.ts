import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: 1,
    title: "SPK Pengadaan Sarana dan Prasarana",
    description: "Decision Support System using the MOORA method to prioritize educational facilities procurement.",
    image: "/projects/spk.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/username/spk-moora",
    demo: "https://spk-moora.example.com",
  },
];

export default projects;