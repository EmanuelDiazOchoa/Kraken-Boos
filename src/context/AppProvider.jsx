import { useState, useEffect } from "react";
import { AppContext } from "./AppContext";

export function AppProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "es";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode, language, setLanguage }}>
      {children}
    </AppContext.Provider>
  );
}
