import React from "react";
import { useAppContext } from "../context/useAppContext";
import UserIcon from "../assets/usericon.png";
import Kraken from "../assets/kraken.png";

export default function Topbar() {
  const { darkMode, setDarkMode, language, setLanguage } = useAppContext();

  const toggleMode = () => setDarkMode(!darkMode);
  const handleLanguageChange = (e) => setLanguage(e.target.value);

  return (
    <header className="w-full bg-violet-800 dark:bg-gray-900 text-white dark:text-gray-200 flex items-center justify-between px-6 py-4 shadow-md transition-all duration-300">
      <div className="flex items-center gap-3">
        <img src={Kraken} alt="Logo Kraken" className="w-10 h-10" />
        <div className="text-xl font-bold">Kraken Boss</div>
      </div>

      <div className="flex items-center gap-4">
        <select
          value={language}
          onChange={handleLanguageChange}
          className="bg-violet-600 dark:bg-gray-700 text-white px-3 py-1 rounded"
        >
          <option value="es">🇦🇷 Español</option>
          <option value="en">🇺🇸 English</option>
          <option value="pt">🇧🇷 Português</option>
        </select>

        <button
          onClick={toggleMode}
          className="bg-violet-600 hover:bg-violet-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-3 py-1 rounded transition"
        >
          {darkMode ? "☀️ Claro" : "🌙 Oscuro"}
        </button>

        <div className="flex items-center gap-2">
          <img 
            src={UserIcon} 
            alt="User" 
            className="w-8 h-8 rounded-full border border-white shadow" />
          <span className="font-medium">Admin Kraken</span>
        </div>
      </div>
    </header>
  );
}
