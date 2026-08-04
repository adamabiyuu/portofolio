import { createContext } from "react";

export interface ActiveSectionContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);
