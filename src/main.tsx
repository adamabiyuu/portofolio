import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.tsx";

import ThemeProvider from "@/contexts/ThemeProvider";
import ActiveSectionProvider from "./contexts/ActiveSectionProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <ActiveSectionProvider>
        <App />
      </ActiveSectionProvider>
    </ThemeProvider>
  </StrictMode>,
);
