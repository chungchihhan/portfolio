"use client";
import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

type ProjectsProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectsProps) {
  // const ref = useRef<HTMLDivElement>(null);
  const { ref } = useSectionInView("Projects", 0.75); // Pass the title as section name to the hook

  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["0 1 ", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [1, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden relative sm:h-[22rem] hover:bg-gray-200 transition rounded-lg flex flex-col sm:flex-row items-center gap-2 sm:gap-0 shadow-inner">
        <div className="py-4 sm:py-10 px-4 sm:pl-10 w-full sm:w-5/12 flex flex-col h-full">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 ">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.5rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-10/12 sm:w-7/12 relative self-end">
          <Image
            src={imageUrl}
            alt="Projects i worked on"
            quality={95}
            className="w-full h-full object-cover rounded-t-lg shadow-2xl transition-transform group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04]"
          />
        </div>
      </section>
    </motion.div>
  );
}
