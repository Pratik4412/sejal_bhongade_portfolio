// Update the import paths below to match the asset file names you have.
import aboutHeroImg from "../assets/about1.jpeg"; // team around the table
import aboutManImg from "../assets/about2.png"; // man holding the keyboard
import { FaFigma } from "react-icons/fa6";
import { RiInvisionLine } from "react-icons/ri";
import {
  TbBrandAdobeXd,
  TbBrandAdobeIllustrator,
  TbBrandAdobePhotoshop,
} from "react-icons/tb";
import { SiCanvas } from "react-icons/si";
export { aboutHeroImg, aboutManImg };
/**
 * Intro block shown by <AboutIntro />.
 * `text` is plain text: a blank line starts a new paragraph.
 */
export const aboutIntro = {
  label: "About Me",
  title: "Professional Problem-Solving Skills",
  text: "I'm a UI/UX and graphic designer based in Pune, with 5+ years of experience designing user-centred digital products for startups and agencies. I started in graphic design and grew into UX, and that mix shows in my work: interfaces that are clear and usable, and also look polished and on-brand.\n\nToday I design AI-powered SaaS products, translating complex workflows into clean, accessible screens. Before that I designed responsive websites and high-conversion landing pages for 15+ client projects. I work in Agile teams, build reusable design systems, and hand over organised files so developers can build exactly what was designed.",
  email: "sejalbhongade29@gmail.com",
  phone: "+91 93077 39538",
  photoAlt: "Sejal Bhongade, UI/UX and graphic designer",
};

export const workProcess = [
  {
    id: 1,
    title: "Discovery & Research",
    text: "We start by understanding your business, users and goals. Through stakeholder conversations, user research and competitor analysis, I gather the insights that guide every design decision.",
  },
  {
    id: 2,
    title: "Strategy & Design",
    text: "Insights become user flows, wireframes and a visual direction. I design in Figma, work in short Agile cycles, iterate quickly on your feedback and prototype the key journeys.",
  },
  {
    id: 3,
    title: "Test & Handoff",
    text: "I validate the prototype through usability testing, refine the details and deliver organised, developer-ready files, with support while the product is built.",
  },
];

export const skillChecks = [
  "UX Research & Testing",
  "Wireframing & Prototyping",
  "UI & Visual Design",
  "Design Systems",
];

// `icon` is optional: import an image/SVG asset and set it here to replace the colored letter tile.
export const techStack = [
  { name: "Figma", icon: FaFigma, color: "#a259ff" },
  { name: "Adobe XD", icon: TbBrandAdobeXd, color: "#ff61f6" },
  { name: "Illustrator", icon: TbBrandAdobeIllustrator, color: "#ff9a00" },
  { name: "Photoshop", icon: TbBrandAdobePhotoshop, color: "#31a8ff" },
  { name: "Canva", icon: SiCanvas, color: "#00c4cc" },
  { name: "InVision", icon: RiInvisionLine, color: "#ff3366" },
];

// Most recent first (from the resume)
export const experiences = [
  {
    id: 1,
    role: "UI/UX & Graphic Designer",
    company: "Nimbusnext",
    type: "Full Time",
    period: "Feb 2025 - Present",
    color: "#22d3ee",
  },
  {
    id: 2,
    role: "UI/UX Designer",
    company: "Osumare Marketing Solutions",
    type: "Full Time",
    period: "Jan 2024 - Sept 2025",
    color: "#ec4899",
  },
  {
    id: 3,
    role: "Graphic & UI/UX Designer",
    company: "Bird Code Community",
    type: "Full Time",
    period: "Nov 2020 - Jan 2024",
    color: "#818cf8",
  },
];
export const designPrinciples = [
  {
    id: 1,
    title: "Research before pixels",
    text: "Every project starts by understanding people: user research, usability testing, flows and information architecture, so design decisions are backed by evidence, not guesses.",
  },
  {
    id: 2,
    title: "Clarity over decoration",
    text: "Clean hierarchy, readable type and simple interactions. If an element does not help the user reach their goal, it does not make the cut.",
  },
  {
    id: 3,
    title: "Accessible by default",
    text: "Contrast, readable text and comfortable tap targets are part of the first design, not an afterthought, so more people can use the product with ease.",
  },
  {
    id: 4,
    title: "Systems, not one-off screens",
    text: "Reusable components and tokens keep a product consistent as it grows, and they cut design time. At Osumare, this approach reduced it by 30%.",
  },
  {
    id: 5,
    title: "Make complex things simple",
    text: "Whether it is an AI workflow or a long sign-up process, I break it into clear steps and plain language so users always know what to do next.",
  },
  {
    id: 6,
    title: "Designed to be built",
    text: "Organised, developer-ready files and close collaboration in Agile sprints, so what ships matches what was designed.",
  },
];
export const education = [
  {
    id: 1,
    degree: "BCA (Bachelor of Computer Applications)",
    institute: "Sant Gadge Baba Amravati University",
    period: "2019 - 2022",
    score: "82%",
  },
];
export const certifications = [
  {
    id: 1,
    title: "Advance Certificate in Innovation & Experience Design",
    issuer: "MIT Institute of Design, Shillong",
    grade: "Grade: A+",
  },
  {
    id: 2,
    title: "UX Innovation & Experience Design",
    issuer: "MIT University, Meghalaya",
  },
  {
    id: 3,
    title: "Digital Skills: User Experience",
    issuer: "Accenture",
  },
];
export const languages = ["English", "Hindi", "Marathi"];

// PLACEHOLDERS: replace with real quotes (with permission) or remove this section until you have them.
export const scrollingTestimonials = [
  {
    id: 1,
    quote: "[Paste a real client or colleague quote here.]",
    name: "[Name]",
    role: "[Role, Company]",
  },
];
