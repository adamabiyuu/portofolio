import { FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";

import { SiGo,  SiTailwindcss, SiTypescript } from "react-icons/si";
// import { SiGo, SiPostgresql, SiTailwindcss, SiTypescript } from "react-icons/si";

export const floatingIcons = [
  {
    icon: FaReact,
    color: "text-sky-500",
    className: "-top-4 left-8 animate-float",
  },
  {
    icon: SiTypescript,
    color: "text-blue-500",
    className: "top-20 -left-10 animate-float-delay",
  },
  {
    icon: FaNodeJs,
    color: "text-green-500",
    className: "top-10 -right-8 animate-float-slow",
  },
  {
    icon: SiGo,
    color: "text-cyan-500",
    className: "bottom-14 -left-8 animate-float",
  },
  {
    icon: FaGitAlt,
    color: "text-orange-500",
    className: "bottom-0 right-0 animate-float-delay",
  },
//   {
//     icon: SiPostgresql,
//     color: "text-blue-600",
//     className: "bottom-28 -right-12 animate-float-slow",
//   },
  {
    icon: SiTailwindcss,
    color: "text-cyan-400",
    className: "top-1/2 right-[-50px] animate-float",
  },
];
