"use client";
import { useRef } from "react";
import { blogsData } from "@/lib/data";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

type BlogsProps = (typeof blogsData)[number];

export default function Blog({
  title,
  description,
  emoji,
  bg_pic,
  url,
}: BlogsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1 ", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className=" bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem]  hover:bg-gray-200 transition rounded-lg">
        <Image
          src={bg_pic}
          alt="Blogs Background"
          quality={95}
          className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl"
        />
        <div className="py-4 pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full ml-[18rem]">
          <p>{emoji}</p>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        </div>
        <a
          href={url}
          className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl"
        >
          Read more
          {/* <iframe src="https://www.notion.so/Pok-mon-Master-AWS-Lambda-DynamoDB-dd2357fd85af450db5551fd1f4420591"></iframe> */}
        </a>
      </section>
    </motion.div>
  );
}
