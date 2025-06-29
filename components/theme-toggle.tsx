"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState<boolean>(true); // assume light until proven otherwise
  const [ready, setReady] = useState(false); // gates Framer Motion on first paint

  useEffect(() => {
    if (typeof window === "undefined") return; // SSR guard

    // Read stored preference or system setting
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.(
      "(prefers-color-scheme: dark)"
    ).matches;
    const shouldUseLight = stored ? stored === "light" : !prefersDark;

    setIsLight(shouldUseLight);
    document.documentElement.classList.toggle("dark", !shouldUseLight);
    setReady(true); // unlock animation
  }, []);

  const handleToggle = () => {
    const next = !isLight;
    setIsLight(next);
    localStorage.setItem("theme", next ? "light" : "dark");
    document.documentElement.classList.toggle("dark", !next);
  };

  // First paint on the client can be empty <div> to avoid mismatch
  if (!ready) return <div className="w-6 h-6" />;

  return (
    <div className="flex items-center pl-1">
      <input
        id="theme-checkbox"
        type="checkbox"
        className="peer sr-only"
        checked={isLight}
        onChange={handleToggle}
      />

      <label
        htmlFor="theme-checkbox"
        className="relative cursor-pointer p-1 focus:outline-none bg-black bg-opacity-30 rounded-full"
      >
        <AnimatePresence initial={false} mode="wait">
          {isLight ? (
            <motion.svg
              key="sun"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.25 }}
              viewBox="0 0 24 24"
              width="18"
              height="18"
              className="text-orange-300"
              fill="currentColor"
            >
              <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
              <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.54 6.95l-1.41-1.41M6.88 6.88L5.46 5.46m0 13.09l1.41-1.41m11.67-11.67l1.41-1.41" />
            </motion.svg>
          ) : (
            <motion.svg
              key="moon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.25 }}
              viewBox="0 0 24 24"
              width="18"
              height="18"
              className="text-yellow-300"
              fill="currentColor"
            >
              <path d="M21 12.79A9 9 0 0111.21 3 7 7 0 1019 13.79 9.05 9.05 0 0121 12.79z" />
            </motion.svg>
          )}
        </AnimatePresence>
        <span className="sr-only">Switch theme</span>
      </label>
    </div>
  );
}
