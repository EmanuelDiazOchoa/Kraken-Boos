// src/context/AppProvider.jsx
import { useEffect } from "react";
import { AppContext } from "./AppContext";

export function AppProvider({ children }) {
  // 🌙 Solo modo oscuro automático
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", prefersDark);
  }, [prefersDark]);

  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  );
}
