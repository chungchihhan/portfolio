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
    <motion.div
      className="flex items-center pl-1"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <input
        id="theme-checkbox"
        type="checkbox"
        className="peer sr-only"
        checked={isLight}
        onChange={handleToggle}
      />

      <label
        htmlFor="theme-checkbox"
        className="relative cursor-pointer p-1 focus:outline-none bg-neutral-500 bg-opacity-50 rounded-full"
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
              fill="none"
              stroke="currentColor" // stroke instead of fill keeps it crisp
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-yellow-300"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
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
    </motion.div>
  );
}
