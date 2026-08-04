import AboutHighlights from "./AboutHighlights";
import SocialLinks from "./SocialLinks";

const AboutContent = () => {
  return (
    <div>
      <h3 className="text-3xl font-bold">Hi, I'm Adam Abiyu Febrisyam.</h3>

      <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
        A frontend web developer based in Indonesia with a passion for building modern, responsive, and user-friendly web applications. I enjoy turning ideas into clean digital experiences while continuously learning and improving my skills
        through real-world projects.
      </p>

      <AboutHighlights />

      <SocialLinks />
    </div>
  );
};

export default AboutContent;
