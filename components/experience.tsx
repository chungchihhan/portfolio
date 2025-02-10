"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useInView } from "react-intersection-observer";
import { MdOutlineLocationOn } from "react-icons/md";

// Define a type for the item structure
type ExperienceItem = {
  date: string;
  title: string;
  location: string;
  description: string;
  icon: React.ReactNode; // Assuming the icon is a React node
};

// Separate component for timeline element
interface TimelineElementProps {
  item: ExperienceItem;
}

const TimelineElement: React.FC<TimelineElementProps> = ({ item }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        visible={inView}
        contentStyle={{
          background: "#fff",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          borderRadius: "0.5rem",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight: "0.4rem solid #9ca3af",
        }}
        date={item.date}
        icon={item.icon}
        iconStyle={{
          background: "white",
          fontSize: "1.5rem",
        }}
      >
        <h3 className="font-semibold underline">{item.title}</h3>

        <div className="font-normal text-gray-500 !mt-1 flex items-center text-xs">
          <MdOutlineLocationOn size={16} />
          {item.location}
        </div>
        <p className="!mt-1 !font-normal text-gray-700">{item.description}</p>
      </VerticalTimelineElement>
    </div>
  );
};

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline animate={true}>
        {experiencesData.map((item, index) => (
          <TimelineElement key={index} item={item} />
        ))}
      </VerticalTimeline>
    </section>
  );
}
