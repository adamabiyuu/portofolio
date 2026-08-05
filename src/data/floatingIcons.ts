import { FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import { SiGo, SiTailwindcss, SiTypescript } from "react-icons/si";

export const floatingIcons = [
  {
    icon: FaReact,
    color: "text-sky-500",
    className: "-top-3 left-6 animate-float",
  },
  {
    icon: SiTypescript,
    color: "text-blue-500",
    className: "top-14 -left-4 animate-float-delay",
  },
  {
    icon: FaNodeJs,
    color: "text-green-500",
    className: "top-8 -right-4 animate-float-slow",
  },
  {
    icon: SiGo,
    color: "text-cyan-500",
    className: "bottom-14 -left-3 animate-float",
  },
  {
    icon: FaGitAlt,
    color: "text-orange-500",
    className: "bottom-1 right-2 animate-float-delay",
  },
  {
    icon: SiTailwindcss,
    color: "text-cyan-400",
    className: "top-1/2 -right-5 -translate-y-1/2 animate-float",
  },
];
