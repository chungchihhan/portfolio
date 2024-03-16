"use client";
import React from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in National Taiwan University
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I dedicated in a coding course and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          Next.js, MERN, TailwindCSS, LlamaIndex and LangChain.
        </span>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy doing some
        photography, playing basketball and watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">how to play a guitar.</span>
      </p>
    </motion.section>
  );
}
