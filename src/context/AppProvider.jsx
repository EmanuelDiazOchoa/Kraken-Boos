import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";

export function AppProvider({ children }) {
  const [prefersDark, setPrefersDark] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      setPrefersDark(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", prefersDark);
  }, [prefersDark]);

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}
