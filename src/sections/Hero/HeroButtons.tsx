import { Link } from "react-scroll";

import Button from "@/components/ui/Button";

const HeroButtons = () => {
  return (
    <div
      className="
        mt-10
        flex
        w-full
        flex-col
        gap-4

        sm:w-auto
        sm:flex-row
        sm:flex-wrap
      "
    >
      <Link to="contact" smooth duration={500} offset={-80} className="w-full sm:w-auto">
        <Button className="w-full">Contact Me</Button>
      </Link>

      <Link to="portfolio" smooth duration={500} offset={-80} className="w-full sm:w-auto">
        <Button variant="secondary" className="w-full">
          View Portfolio
        </Button>
      </Link>

      <a href="/cv.pdf" download target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
        <Button variant="secondary" className="w-full">
          Download CV
        </Button>
      </a>
    </div>
  );
};

export default HeroButtons;
