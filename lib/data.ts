import React from "react";
import { GiEarthAmerica } from "react-icons/gi";
import { FaAws } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Overseas Internship Program",
    location: "New Mexico, America",
    description:
      "Participated in LEWIS project at the University of New Mexico, USA, designed high-efficiency wireless smart sensors at low cost, and taught local children to assemble their own Arduino sensors",
    icon: React.createElement(GiEarthAmerica),
    date: "Jul 2022 – Aug 2022",
  },
  {
    title: "Bachelor, National Taiwain University",
    location: "Taipei, Taiwan",
    description:
      "Graduated from NTU after 4 years of studying. I double majored in mechanical engineering and bioenvironmental systems engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "Jun 2019 -  Sep 2023",
  },
  {
    title: "AI Application Service Intern",
    location: "Chunghwa Telecom Co., Ltd.",
    description:
      "I am working on LLM application, including using DSPy to improve prompting and combining Neo4j as a knowledge graph to improve RAG answer accuracy.",
    icon: React.createElement(LuBrainCircuit),
    date: "Feb 2023 - Present",
  },
  {
    title: "AWS Educate Ambassador",
    location: "Amazon Web Services,Taiwan",
    description:
      "I'm now a AWS Educate Ambassador, hosting workshops and events to promote AWS services to students.",
    icon: React.createElement(FaAws),
    date: "March 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Github",
  "Tailwind",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "DSPy",
  "Langchain",
  "LlamaIndex",
] as const;
