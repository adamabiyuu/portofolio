import { useMemo, useState, type ReactNode } from "react";

import { ActiveSectionContext } from "./ActiveSectionContext";

interface ActiveSectionProviderProps {
  children: ReactNode;
}

const ActiveSectionProvider = ({ children }: ActiveSectionProviderProps) => {
  const [activeSection, setActiveSection] = useState("home");

  const value = useMemo(
    () => ({
      activeSection,
      setActiveSection,
    }),
    [activeSection],
  );

  return <ActiveSectionContext.Provider value={value}>{children}</ActiveSectionContext.Provider>;
};

export default ActiveSectionProvider;
