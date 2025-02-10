"use client";
import React, { use } from "react";
import SectionHeading from "@/components/section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-white border-[0.1rem] rounded-full px-5 py-3"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            style={{
              boxShadow:
                "0 4px 6px rgba(251, 226, 227, 0.5), 0 4px 6px rgba(219, 215, 251, 0.5), 0 0 15px rgba(219, 215, 251, 0.3), inset 0px 0px 10px rgba(219, 215, 251, 0.2)",
            }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
