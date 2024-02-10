import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
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
    title: "Graduated University of Portland",
    location: "Portland, OR",
    description:
      "Graduated with a B.B.A. in Business; Marketing.",
    icon: React.createElement(LuGraduationCap),
    date: "2016",
  },
  {
    title: "Customer Success Research Analyst @ClearlyRated",
    location: "Portland, OR",
    description:
      "Led data cleaning, processing and analysis of 100,000's of data points to provide key, analysis-supported recommendations to fortune 500 c-suites.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2019",
  },
  {
    title: "Graduated Epicodus Bootcamp",
    location: "Portland, OR",
    description:
      "Completed the Epicodus React/Ruby Development Track.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Data Engineer @Nike",
    location: "Portland, OR",
    description:
      "Developed and maintained an array of diverse, end to end data collection pipelines",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Data Engineer @Liberty Mutual Insurance",
    location: "Seattle, WA",
    description:
      "Translated legacy projects written in SAS and SQL to modern Python and PySpark projects run in AWS EC2.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Freelance Engineer",
    location: "Missoula, MT",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Python, Java and Ruby. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
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
  "Python",
  "React",
  "JavaScript",
  "Git",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "NLP",
  "Machine Learning",
  "Snowflake",
  "SAS",
  "Ruby",
  "AWS",
  "Lambda",
  "MySQL",
  "Tailwind",
  "Django",
  "Framer Motion",
] as const;