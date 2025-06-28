"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={toggleTheme}
        className="relative w-14 h-8 bg-gray-300 dark:bg-black dark:bg-opacity-50 rounded-full transition-colors duration-300 focus:outline-none"
      >
        <div
          className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white dark:bg-white shadow-md transform transition-transform duration-300 ${
            isDark ? "translate-x-6" : ""
          }`}
        />
        <span className="absolute left-2 top-2 text-xs">🌙</span>
        <span className="absolute right-2 top-2 text-xs">🌞</span>
      </button>
    </div>
  );
}
