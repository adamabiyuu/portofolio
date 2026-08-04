import { useContext } from "react";

import { ActiveSectionContext } from "@/contexts/ActiveSectionContext";

const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);

  if (!context) {
    throw new Error("useActiveSection must be used within ActiveSectionProvider");
  }

  return context;
};

export default useActiveSection;
