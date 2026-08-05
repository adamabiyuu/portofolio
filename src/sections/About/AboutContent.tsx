import AboutHighlights from "./AboutHighlights";
import SocialLinks from "./SocialLinks";

const AboutContent = () => {
  return (
    <div
      className="
        text-center
        lg:text-left
      "
    >
      <h3
        className="
          text-3xl
          font-bold
          leading-tight

          sm:text-4xl
        "
      >
        Hi, I'm <span className="text-sky-500">Adam Abiyu Febrisyam</span>
      </h3>

      <p
        className="
          mx-auto
          mt-6
          max-w-2xl

          text-base
          leading-8
          text-slate-300

          sm:text-lg

          lg:mx-0
        "
      >
        A Frontend Web Developer based in Indonesia with a passion for building modern, responsive, and user-friendly web applications. I enjoy turning ideas into clean digital experiences while continuously learning and improving my skills
        through real-world projects.
      </p>

      <div className="mt-10">
        <AboutHighlights />
      </div>

      <div className="mt-10">
        <SocialLinks />
      </div>
    </div>
  );
};

export default AboutContent;
