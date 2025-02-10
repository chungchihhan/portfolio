import React from "react";
import { GiEarthAmerica } from "react-icons/gi";
import { FaAws } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import tindog from "@/public/tindog.png";
import TsmcEats from "@/public/TsmcEats.png";
import llamaindex from "@/public/llamaindex.png";

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
    title: "LlamaIndex Chatbot",
    description:
      "A chatbot that can answer questions about the provided data. It is hosted on NAS using Docker and uploaded files are saved to NAS.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "LlamaIndex",
      "Docker",
      "NAS",
    ],
    imageUrl: llamaindex,
  },
  {
    title: "TSMC Eats",
    description:
      "A food order website for employees of TSMC. It can handle 100 GET requests and 35 POST requests per second at the peak time.",
    tags: ["MERN", "TypeScript", "Tailwind", "Azure", "Apache JMeter"],
    imageUrl: TsmcEats,
  },
  {
    title: "Tindog",
    description:
      "A public web app for dogs dating. It identifies the dogs in the photo and allows successful matches to chat.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Neon",
      "Tailwind",
      "Edge Store",
      "ONNX",
      "PyTorch",
    ],
    imageUrl: tindog,
  },
] as const;

export const skillsData = [
  "Python",
  "TypeScript",
  "AWS",
  "Terraform",
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "Tailwind",
  "Docker",
  "Node.js",
  "Github",
  "Langchain",
] as const;
