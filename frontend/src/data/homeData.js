// Update the import paths below to match the asset file names you have.
import startImg from "../assets/home-images/start-shape.png";
import project1 from "../assets/projects/project-5.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import testimonialImg from "../assets/home-images/Gemini.png";
// import blog1 from "../assets/home-images/blog-1.webp";
// import blog2 from "../assets/home-images/blog-2.webp";
// import blog3 from "../assets/home-images/blog-3.webp";

export { startImg };

export const marqueeWords = ["Designer", "Digital", "Creative"];

export const services = [
  {
    id: "01",
    title: "UX Research & Strategy",
    description:
      "User research, usability testing, user flows and information architecture that replace assumptions with evidence and give your product a clear direction.",
  },
  {
    id: "02",
    title: "UI Design for Web & Mobile",
    description:
      "Modern, accessible and responsive interfaces for websites, landing pages and apps, designed mobile-first and aligned with your brand.",
  },
  {
    id: "03",
    title: "Wireframing & Prototyping",
    description:
      "From low-fidelity flows to interactive Figma prototypes, so ideas are tested with real users before a single line of code is written.",
  },
  {
    id: "04",
    title: "Design Systems & Handoff",
    description:
      "Reusable components, tokens and documentation that keep your product consistent, cut design time and make developer handoff fast and unambiguous.",
  },
  {
    id: "05",
    title: "Graphic Design & Branding",
    description:
      "Logos, visual identities, social creatives, banners and marketing collateral that make your brand look consistent everywhere it appears.",
  },
];

// `offset` pushes the card down to create the staggered two-column layout
export const projects = [
  {
    id: 1,
    title: "Healthy Eating App: UX Case Study (Mobile App UX)",
    image: project1,
    href: "#",
    offset: false,
  },
  {
    id: 2,
    title: "Kids Learning Platform Website (Education Website)",
    image: project2,
    href: "#",
    offset: true,
  },
  {
    id: 3,
    title: "Lexicon Kids – Preschool & Early Learning Website",
    image: project3,
    href: "#",
    offset: false,
  },
  {
    id: 4,
    title: "PPF & Car Detailing Website (Automotive Website)",
    image: project4,
    href: "https://leewaysdetail.com/",
    offset: true,
  },
];

export const testimonial = {
  quote:
    "Working with Pentos is a fantastic experience. He truly understood our vision and turned our dream home into a reality. The attention to detail and dedication were beyond my imagination.",
  name: "Cameron Williamson",
  role: "CEO, SOKON",
  // image: testimonialImg,
};
export const awards = [
  {
    year: "2026",
    title: "Claude Certified Associate – Foundations",
    organization: "Anthropic",
    description:
      "Demonstrates practical skills in applying Claude to everyday business tasks, evaluating AI outputs, selecting appropriate models, and using AI responsibly.",
    credentialUrl:
      "https://www.credly.com/badges/b3472b97-cfe6-4fb9-baf5-e6eef8079738/public_url",
    category: "AI Certification",
  },
  {
    year: "2026",
    title: "Using AI in the UX Design Process",
    organization: "LinkedIn Learning",
    description:
      "Explores the use of AI tools for user research synthesis, generating research artifacts, and identifying patterns at scale.",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/642a3d87dd3de6221ada3726ab50f8134a1b369d358922d8f80e2120d67c1936/",
    category: "AI & UX Design",
  },
  {
    year: "2026",
    title: "Design Psychology: Master the Art and Science of UX Design",
    organization: "Madecraft and Tiziana d'Agostino",
    description:
      "Covers cognitive load, attention, memory, emotions, user behavior, and the principles behind effective and ethical UX design.",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/a88caf1686f4254663c5f3c9e8a1af753ea4d0ca38ad9c6a74e5ca3660022bcb/",
    category: "UX Design",
  },
];
// export const awards = [
//   {
//     year: "2024",
//     title: "Excellency Award",
//     description:
//       "Awarded for excellence in web design, showcasing my talent in creating engaging user interactions.",
//   },
//   {
//     year: "2023",
//     title: "Web Design Award",
//     description:
//       "Recognized for outstanding work in a community web design competition, highlighting innovation.",
//   },
//   {
//     year: "2022",
//     title: "Best in Town",
//     description:
//       "Honored as a rising talent in a local web design competition, recognized for creativity and skill.",
//   },
//   {
//     year: "2021",
//     title: "Featured in Dehance",
//     description:
//       "Featured on Dehance for web design excellence, showcasing dynamic and engaging interactions.",
//   },
// ];

export const articles = [
  {
    id: 1,
    category: "Business",
    date: "Oct 23, 2024",
    title: "Effective Strategies to Boost Your Online",
    // image: blog1,
    href: "#",
  },
  {
    id: 2,
    category: "Business",
    date: "Oct 4, 2024",
    title: "Importance of UX/UI Design in Today's",
    // image: blog2,
    href: "#",
  },
  {
    id: 3,
    category: "Business",
    date: "Sep 6, 2024",
    title: "10 UI Design Tricks & Marketing Tips",
    // image: blog3,
    href: "#",
  },
];
export const philosophy = {
  label: "My Approach",
  title: "How I think about design",
  statement:
    "Good design is invisible. When a product feels effortless, it is because someone took the time to understand real people first, then removed everything that gets in their way.",
  principles: [
    "Research before pixels",
    "Clarity over decoration",
    "Design that developers can build",
  ],
  name: "Sejal Bhongade",
  role: "UI/UX & Graphic Designer",
  image: testimonialImg,
  imageAlt: "Portrait of Sejal Bhongade",
};
export const footerLinks = {
  navigation: ["Home", "About", "Services", "My Projects", "Blog", "404"],
  services: [
    "Analytics & Strategy",
    "UX/UI Design",
    "Branding & Identity",
    "Web Development",
    "Get my Template",
  ],
};
