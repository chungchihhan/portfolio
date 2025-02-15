import React from "react";
import { GiEarthAmerica } from "react-icons/gi";
import { FaAws } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { LuGraduationCap } from "react-icons/lu";
import { BiServer } from "react-icons/bi";
import gitvatar from "@/public/gitvatar.png";
import psytest from "@/public/psytest.png";
import pokemonmaster from "@/public/pokemonmaster.png";
import tpet from "@/public/tpet.png";
import tindog from "@/public/tindog.png";
import TsmcEats from "@/public/TsmcEats.png";
import llamaindex from "@/public/llamaindex.png";
import arXivreader from "@/public/arXivreader.png";

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
    title: "Master, National Taiwain University",
    location: "Taipei, Taiwan",
    description:
      "Major in mechanical engineering, and dedicated into generative AI and retrieval augmented generation.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2023 -  Present",
  },
  {
    title: "AI Application Service Intern",
    location: "Chunghwa Telecom, Taiwan",
    description:
      "Researching prompt engineering with DSPy and enhancing RAG accuracy by integrating Knowledge Graph with Neo4j and LangChain.",
    icon: React.createElement(LuBrainCircuit),
    date: "Feb 2024 - June 2024",
  },
  {
    title: "Cloud Engineer Intern",
    location: "eCloudvalley, Taiwan",
    description:
      "Deployed MediaTek DaVinci scripts and the full MVP2 platform using IaC tools, optimizing infrastructure with automated deployment for networking, security, and cloud services.",
    icon: React.createElement(BiServer),
    date: "Jul 2024 - Oct 2024",
  },
  {
    title: "6th AWS Educate Ambassador Technical Support",
    location: "Amazon Web Services, Taiwan",
    description:
      "Developed an interactive Pokémon web app using AWS services and launched a psychological test on AWS, attracting 7,000+ users in 17 days.",
    icon: React.createElement(FaAws),
    date: "March 2024 - Nov 2024",
  },
  {
    title: "7th AWS Educate Ambassador Technical Support",
    location: "Amazon Web Services, Taiwan",
    description:
      "Using microservices to create a fully serverless email system (TPET) for only $15, reducing workload by up to 80%.",
    icon: React.createElement(FaAws),
    date: "Jan 2025 - present",
  },
] as const;

export const projectsData = [
  {
    title: "GitVatar",
    description:
      "A opensource project that reads the user's github repositories and generates a unique avatar.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "OAuth",
      "Github API",
      "OpenAI",
    ],
    imageUrl: gitvatar,
    link: "https://gitvatar.chih-han.com/",
  },
  {
    title: "AWS Psychological Test",
    description:
      "A psychological test that can analyze the personality and generates unique images based on the user's answers.",
    tags: ["Lambda", "API Gateway", "DyanmoDB", "Bedrock", "S3", "CloudFront"],
    imageUrl: psytest,
    link: "https://psy.aws-educate.tw/",
  },
  {
    title: "AWS Pokemon Master",
    description:
      "A fully serverless interaction web app that can search and catch pokemon based on PokéAPI.",
    tags: ["Lambda", "API Gateway", "DynamoDB", "S3", "PokéAPI"],
    imageUrl: pokemonmaster,
    link: "https://aws-pokemon-master.chih-han.com/",
  },
  {
    title: "TPET",
    description:
      "A fully serverless and microservice-based email system that can customize the email content and send it to the user automatically.",
    tags: [
      "Lambda",
      "SQS",
      "SES",
      "DynamoDB",
      "S3",
      "CloudFront",
      "API Gateway",
    ],
    imageUrl: tpet,
    link: "https://tpet.aws-educate.tw/",
  },
  {
    title: "arXiv reader",
    description:
      "A web app that helps user read arXiv papers in a clean and easy-to-read format.",
    tags: ["Tailwind", "React", "arXiv API", "Vercel"],
    imageUrl: arXivreader,
    link: "https://arxiv-cite.chih-han.com/",
  },
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
    link: "https://github.com/chungchihhan/llama_index_nextjs",
  },
  {
    title: "TSMC Eats",
    description:
      "A food order website for employees of TSMC. It can handle 100 GET requests and 35 POST requests per second at the peak time.",
    tags: ["MERN", "TypeScript", "Tailwind", "Azure", "Apache JMeter"],
    imageUrl: TsmcEats,
    link: "https://github.com/chungchihhan/sushi-restaurant",
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
    link: "https://github.com/kszuyen/A-Dating-App-for-Dogs",
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
