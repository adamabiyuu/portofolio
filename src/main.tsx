import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Toaster } from "sonner";
import "./index.css";
import App from "./App";
import ActiveSectionProvider from "./contexts/ActiveSectionProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ActiveSectionProvider>
      <App />

      <Toaster position="top-right" richColors closeButton duration={3000} />
    </ActiveSectionProvider>
  </StrictMode>,
);
