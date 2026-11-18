import { useEffect, useState } from "react";
import HeroButtons from "./HeroButtons";
import TechStack from "./TechStack";

const roles = ["Full Stack Developer", "Frontend Developer"];

const HeroContent = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentRole) {
      // Wait before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && text === "") {
      // Move to the next role
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 100);
    } else {
      // Typing and deleting animation
      timeout = setTimeout(
        () => {
          setText(isDeleting ? currentRole.substring(0, text.length - 1) : currentRole.substring(0, text.length + 1));
        },
        isDeleting ? 50 : 100,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <div
      className="
        flex
        flex-col
        items-center
        text-center

        lg:items-start
        lg:text-left
      "
    >
      {/* Greeting */}
      <p
        className="
          text-base
          font-medium
          tracking-wide
          text-sky-500

          sm:text-lg
        "
      >
        👋 Hello, I'm
      </p>

      {/* Name */}
      <h1
        className="
          mt-4
          text-4xl
          font-bold
          leading-tight

          sm:text-5xl
          md:text-6xl
          lg:text-7xl
        "
      >
        Adam Abiyu
        <br />
        <span className="text-sky-500">Febrisyam</span>
      </h1>

      {/* Animated Job */}
      <h2
        className="
          mt-1
          min-h-[32px]
          text-lg
          font-semibold
          text-slate-400

          sm:min-h-[36px]
          sm:text-xl

          md:min-h-[40px]
          md:text-2xl
        "
      >
        {text}
        <span className="ml-1 animate-pulse text-sky-500">|</span>
      </h2>

      {/* Description */}
      <p
        className="
          mt-3
          max-w-xl
          text-base
          leading-8
          text-slate-300

          sm:text-lg
        "
      >
        I build modern, responsive, and high-performance web applications with a strong focus on clean code and user experience.
      </p>

      {/* Buttons */}
      <HeroButtons />

      {/* Tech Stack */}
      <TechStack />
    </div>
  );
};

export default HeroContent;
