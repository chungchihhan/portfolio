"use client";
import React, { useEffect } from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
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
      <p className="mb-3 text-pretty">
        After graduating with a bachelor&apos;s degree from{" "}
        <span className="font-semibold italic">National Taiwan University</span>
        , I developed an interest in programming. I began learning about cloud
        and web services, dedicating myself to{" "}
        <span className="font-semibold italic">
          cloud and full-stack development
        </span>
        . I have worked on projects utilizing various AWS services such as{" "}
        <span className="font-semibold italic">
          Lambda, API Gateway, S3, CloudFront, and DynamoDB
        </span>
        . Additionally, I have gained experience with Infrastructure as Code
        (IaC) tools like{" "}
        <span className="font-semibold italic">Terraform. </span>
        <span>
          My favorite aspect of programming is the immediate feedback I receive
          right after pressing the ENTER key.
        </span>
      </p>
      <p>
        I have experience in <span className="font-semibold italic">Agile</span>{" "}
        environments, participating in{" "}
        <span className="font-semibold italic">
          sprint planning, sprint reviews, and retrospectives
        </span>
        . This has improved my collaboration, communication skills, and ability
        to adapt to changing requirements.
      </p>
    </motion.section>
  );
}
