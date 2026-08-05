import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import useActiveSection from "./useActiveSection";

const useSectionObserver = (section: string) => {
  const { setActiveSection } = useActiveSection();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-80px 0px -40% 0px",
  });

  useEffect(() => {
    if (inView) {
      setActiveSection(section);
    }
  }, [inView, section, setActiveSection]);

  return ref;
};

export default useSectionObserver;
