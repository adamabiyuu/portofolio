import HeroButtons from "./HeroButtons";
import TechStack from "./TechStack";

const HeroContent = () => {
  return (
    <div>
      <p className="text-lg font-medium text-sky-500">Hello,</p>

      <h1 className="mt-4 text-5xl font-bold leading-tight lg:text-7xl">I'm Adam Abiyu Febrisyam</h1>

      <h2 className="mt-6 text-2xl font-semibold text-slate-500 dark:text-slate-400">Frontend Web Developer</h2>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">Building modern, responsive web applications with clean code and intuitive user experiences.</p>

      <HeroButtons />

      <TechStack />
    </div>
  );
};

export default HeroContent;
