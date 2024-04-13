"use client";
import React, { useEffect } from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a bachelor degree of{" "}
        <span className="font-semibold italic">National Taiwan University</span>
        , I am interested in programming.I started to learn web services and
        dedicated in{" "}
        <span className="font-semibold italic">full-stack developement</span>.
        What&apos;s more, I am also putting efforts to LLM, such as{" "}
        <span className="font-semibold italic">Langchain</span> and{" "}
        <span className="font-semibold italic">LlamaIndex.</span>{" "}
        <span>
          My favorite part of programming is the instant feedback I get right
          after clicking on the ENTER button.
        </span>
      </p>
      <p>
        When I am not coding, I enjoy doing some photography, playing basketball
        and watching movies. I also enjoy learning new things. I am currently
        building little applications using{" "}
        <span className="font-semibold italic">AWS serviecs.</span>{" "}
      </p>
    </motion.section>
  );
}
