import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: 1,
    title: "Project Management System",
    description:
      "A full-stack web application designed to manage projects, tasks, and team collaboration, developed using Go (Fiber) for the backend and React.js for the frontend. The application follows a RESTful API architecture and supports Kanban-style project management with authentication, role-based access, and real-time workflow organization. ",
    image: "/projects/goreact.png",
    technologies: ["Go", "React", "TypeScript", "PostgreSQL", "Node.js"],
    github: "https://github.com/adamabiyuu/project-management",
    demo: "",
    demoVideo: "https://youtu.be/drE6vJrUPe4",
  },
  {
    id: 2,
    title: "Event Management Web Application",
    description:
      "A full-stack web application for managing events, built using the MERN Stack (MongoDB, Express.js, React.js, Node.js) through a project-based learning approach with Scrum ethodology. The application was developed from scratch to deployment-ready stage, following current industry standards.",
    image: "/projects/acara.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/adamabiyuu/back-end-acara",
    demo: "https://front-end-acara-omega.vercel.app/",
    demoVideo: "",
  },
  {
    id: 3,
    title: "Prestige Palace Residence Web Application",
    description: "Prestige Palace Residence is a modern property marketing website that showcases quality homes, complete facilities, strategic locations, and the latest residential information to help you find your dream home.",
    image: "/projects/prestige-palace.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/adamabiyuu/prestige-palace-residence-property",
    demo: "https://prestige-palace-residence-property.vercel.app/index.html",
    demoVideo: "",
  },
  {
    id: 4,
    title: "First Portofolio Website using Tailwind CSS",
    description:
      "My first portfolio website built with Tailwind CSS, showcasing my projects, skills, certifications, and professional experience. The website features a modern, responsive design with smooth navigation, dark mode support, and a clean user interface to provide an engaging user experience.",
    image: "/projects/porto.png",
    technologies: ["Tailwind CSS", "JavaScript", "HTML"],
    github: "https://github.com/adamabiyuu/portfolio-tailwind-css-4",
    demo: "https://portfolio-tailwind-css-4.vercel.app/",
    demoVideo: "",
  },
  {
    id: 5,
    title: "First Portofolio Website using Tailwind CSS",
    description:
      "My first portfolio website built with Tailwind CSS, showcasing my projects, skills, certifications, and professional experience. The website features a modern, responsive design with smooth navigation, dark mode support, and a clean user interface to provide an engaging user experience.",
    image: "/projects/porto.png",
    technologies: ["Tailwind CSS", "JavaScript", "HTML"],
    github: "https://github.com/adamabiyuu/portfolio-tailwind-css-4",
    demo: "https://portfolio-tailwind-css-4.vercel.app/",
    demoVideo: "",
  },
];

export default projects;