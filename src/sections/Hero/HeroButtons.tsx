import Button from "@/components/ui/Button";
import { Link } from "react-scroll";

// import Button from "@/components/common/Button";

const HeroButtons = () => {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <Link to="contact" smooth duration={500} offset={-64}>
        <Button>Contact Me</Button>
      </Link>

      <Link to="portfolio" smooth duration={500} offset={-64}>
        <Button variant="secondary">View Portfolio</Button>
      </Link>

      <Button href="/cv.pdf" variant="secondary">
        Download CV
      </Button>
    </div>
  );
};

export default HeroButtons;
