"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaMedium } from "react-icons/fa6";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContex } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContex();
  return (
    <section
      ref={ref}
      id="home"
      className="max-w-[50rem] text-center scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <Image
              src="/profile_photo2.jpg"
              alt="chih-han"
              width="250"
              height="250"
              quality="100"
              priority={true}
              className="h-48 w-48 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            ></Image>
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            🐵
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello, I am <span className="font-bold">Chih-han Chung</span>.<br />
        You can call me <span className="font-bold">Harry</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          href="#contact"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-3 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className=" opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <div className="flex gap-2">
          <a
            className="bg-white p-4 text-gray-700 flex justify-center items-center gap-2 rounded-full  text-[1.35rem] hover:scale-[1.15] active:scale-105 transition cursor-pointer hover:text=gray-950"
            href="https://github.com/chungchihhan/"
          >
            <BsGithub />
          </a>
          <a
            className="bg-white p-4 text-gray-700 flex justify-center items-center gap-2 rounded-full  text-[1.35rem] hover:scale-[1.15] active:scale-105 transition cursor-pointer hover:text=gray-950"
            href="https://www.linkedin.com/in/chih-han-chung-943950268/"
          >
            <BsLinkedin />
          </a>
          <a
            className="bg-white p-4 text-gray-700 flex justify-center items-center gap-2 rounded-full  text-[1.35rem] hover:scale-[1.15] active:scale-105 transition cursor-pointer hover:text=gray-950"
            href="https://medium.com/@harryup2000"
          >
            <FaMedium />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
