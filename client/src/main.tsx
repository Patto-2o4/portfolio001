import { createRoot } from "react-dom/client";
import App from "./App";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ThemeProvider>
);
