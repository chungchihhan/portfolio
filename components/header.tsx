"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import ThemeToggle from "@/components/theme-toggle";
import Link from "next/link";
import clsx from "clsx";

import { useActiveSectionContex } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContex();
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 my-2 sm:m-0 transform -translate-x-1/2 h-24 w-[calc(100%-2rem)] rounded-lg sm:w-[calc(39rem)] border border-white border-opacity-80 bg-white dark:bg-black dark:bg-opacity-30 dark: border-none transition-colors duration-300 ease-in-out bg-opacity-80 shadow-xl shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[1rem] left-1/2 h-12 -translate-x-1/2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-400 dark:text-white transition-colors duration-300 ease-in-out sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="h-3/4 flex items-center justify-center relative"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link
                href={link.hash}
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition",
                  { "text-gray-950": activeSection === link.name }
                )}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gradient-to-b from-[#fbe2e3] to-[#dbd7fb] shadow-lg rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
          <ThemeToggle />
        </ul>
      </nav>
    </header>
  );
}
