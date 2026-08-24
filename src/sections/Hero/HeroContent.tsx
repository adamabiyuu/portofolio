import HeroButtons from "./HeroButtons";
import TechStack from "./TechStack";

const HeroContent = () => {
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

      {/* Job */}
      <h2
        className="
          mt-5
          text-lg
          font-semibold
          text-slate-400

          sm:text-xl

          md:text-2xl
        "
      >
        Fullstack Developer
      </h2>

      {/* Description */}
      <p
        className="
          mt-6
          max-w-xl
          text-base
          leading-8
          text-slate-300

          sm:text-lg
        "
      >
        I build modern, responsive, and high-performance web applications using React, Go, TypeScript, Tailwind CSS, and other modern technologies with a strong focus on clean code and user experience.
      </p>

      {/* Buttons */}
      <HeroButtons />

      {/* Tech Stack */}
      <TechStack />
    </div>
  );
};

export default HeroContent;
