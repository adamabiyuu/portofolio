import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import useActiveSection from "./useActiveSection";

const useSectionObserver = (section: string) => {
  const { setActiveSection } = useActiveSection();

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    console.log(section, inView);

    if (inView) {
      // console.log("ACTIVE:", section);
      setActiveSection(section);
    }
  }, [inView, section, setActiveSection]);

  return ref;
};

export default useSectionObserver;
