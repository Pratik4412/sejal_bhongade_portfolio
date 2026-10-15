/**
 * Starter content for a UI/UX designer portfolio (about 2 years of experience).
 *
 * Anything in [square brackets] is a placeholder you MUST replace in the admin panel.
 * Testimonials and awards are seeded as INACTIVE placeholders on purpose: only publish
 * real client quotes and real achievements.
 */

export const siteContent = {
  siteName: "Sejal Bhongade",
  resumeUrl: "",

  seo: {
    title: "Sejal Bhongade | UI/UX Designer for Web & Mobile Products",
    description:
      "UI/UX designer with 2+ years of experience crafting clear, user-friendly websites and mobile apps. Explore case studies and let's design your next product.",
  },

  hero: {
    greeting: "Hey There! Sejal Bhongade Here",
    titleLine1: "DESIGN",
    titleLine2: "PARTNER",
    description:
      "I believe in the power of research-led design to turn complex ideas into simple, enjoyable digital experiences. Working closely with you, I bring your product vision to life, from first sketch to developer-ready handoff.",
    ctaLabel: "LET'S TALK",
  },

  marqueeWords: ["Designer", "Digital", "Creative"],
  skillChecks: ["UX Research", "Wireframing & Prototyping", "UI Design", "Design Systems"],

  about: {
    label: "About Me",
    title: "Passion for Digital Innovation",
    description:
      "My journey into design started with a simple curiosity: why do some products feel effortless while others frustrate us? Over the last two years I have turned that curiosity into a craft, researching users, mapping journeys and designing interfaces for websites and mobile apps across education, automotive, health, real estate and interior design.\n\nI focus on clarity over decoration. Every screen I design starts with a real user problem, is tested through quick prototypes, and ends with clean, developer-ready files so the final product matches the design.",
    email: "hello@yourdomain.com",
    phone: "+91 00000 00000",
    image: { url: "", publicId: "" },
    heroBanner: { url: "", publicId: "" },
    stats: [
      { value: "2+", label: "Years of Experience" },
      { value: "6+", label: "Projects Showcased" },
      { value: "5+", label: "Industries Served" },
    ],
  },

  // Section headings. Keys are read by the website; edit the text from Admin > Settings.
  sections: {
    aboutPage: { label: "UI/UX Designer", title: "SEJAL", titleLine2: "BHONGADE" },
    aboutIntro: { label: "About Me", title: "Professional Problem-Solving Skills" },
    process: { label: "My Linear Process", title: "Work Process" },
    techStack: { label: "Professional Skills", title: "Tech Stack" },
    experience: { label: "Where I've Worked", title: "My Professional Experiences" },
    services: { label: "Services", title: "Expertise Solutions" },
    portfolio: { label: "", title: "Portfolio" },
    projectsPage: { label: "Case Studies", title: "AMAZING", titleLine2: "WORK" },
    testimonials: { label: "Testimonials", title: "What my clients say" },
    awards: { label: "Recognition", title: "Awards & Recognitions" },
    blog: { label: "Blog & Articles", title: "Latest Articles" },
    contactCta: { label: "", title: "LET'S TALK" },
  },

  contact: {
    heading: "LET'S TALK",
    email: "hello@yourdomain.com",
    phone: "+91 00000 00000",
    location: "India, available for remote projects worldwide",
  },

  footer: {
    aboutText:
      "A UI/UX designer creating clear, human-centred digital products for startups and growing businesses.",
    copyright: "© 2026 All rights reserved. Sejal Bhongade",
    socials: [
      { platform: "LinkedIn", url: "" },
      { platform: "Behance", url: "" },
      { platform: "Dribbble", url: "" },
      { platform: "Instagram", url: "" },
    ],
  },
};

export const services = [
  {
    title: "UX Research & Strategy",
    description:
      "User interviews, competitor analysis, personas and journey maps that replace assumptions with evidence and give your product a clear direction.",
  },
  {
    title: "UI Design for Web & Mobile",
    description:
      "Modern, accessible and responsive interfaces for websites, landing pages and mobile apps, designed mobile-first and aligned with your brand.",
  },
  {
    title: "Wireframing & Prototyping",
    description:
      "From low-fidelity flows to interactive Figma prototypes, so ideas are tested with real users before a single line of code is written.",
  },
  {
    title: "Design Systems & Handoff",
    description:
      "Reusable components, styles and documentation that keep your product consistent and make developer handoff fast and unambiguous.",
  },
];

export const processSteps = [
  {
    title: "Discovery & Research",
    description:
      "We start by understanding your business, users and goals. Through stakeholder conversations, research and competitor analysis, I gather the insights that guide every design decision.",
  },
  {
    title: "Strategy & Design",
    description:
      "Insights become user flows, wireframes and a visual direction. I design in Figma, iterate quickly on your feedback and prototype the key journeys.",
  },
  {
    title: "Test & Handoff",
    description:
      "I validate the prototype with real users, refine the details and deliver organised, developer-ready files and specs, with support through implementation.",
  },
];

export const tools = [
  { name: "Figma", accentColor: "#a259ff" },
  { name: "FigJam", accentColor: "#ff7262" },
  { name: "Adobe XD", accentColor: "#ff61f6" },
  { name: "Photoshop", accentColor: "#31a8ff" },
  { name: "Illustrator", accentColor: "#ff9a00" },
  { name: "Notion", accentColor: "#e5e5e5" },
];

export const experiences = [
  {
    role: "UI/UX Designer",
    company: "[Company Name]",
    employmentType: "Full Time",
    period: "2025 - Present",
    description:
      "Design end-to-end web and mobile experiences, from research and wireframes to UI and developer handoff, working closely with developers and project managers.",
    accentColor: "#22d3ee",
  },
  {
    role: "Junior UI/UX Designer",
    company: "[Company Name]",
    employmentType: "Full Time",
    period: "2024 - 2025",
    description:
      "Created UI designs and prototypes for client websites, supported user research and maintained shared Figma component libraries.",
    accentColor: "#ec4899",
  },
  {
    role: "UI/UX Design Intern",
    company: "[Company Name]",
    employmentType: "Internship",
    period: "2024",
    description:
      "Learned the complete design workflow by assisting senior designers with wireframes, UI updates and usability testing.",
    accentColor: "#818cf8",
  },
];

const NOTE = "[Add a measurable result confirmed with the client, e.g. conversion, speed, or user feedback.]";

export const projects = [
  {
    title: "Kids Learning Platform Website",
    category: "Education Website",
    year: "2025",
    role: "UI/UX Designer",
    tags: ["Website", "Education", "Responsive"],
    featured: true,
    summary: "A playful, parent-friendly website that makes a learning centre's programmes and admissions easy to understand.",
    overview:
      "A marketing and admissions website for a children's learning centre, designed to feel friendly to kids while building trust with parents.",
    challenge:
      "The previous site buried programme details and admission steps, so parents struggled to compare options and often called to ask basic questions.",
    solution:
      "I restructured the information architecture around parent questions, introduced a bright, rounded visual language, and designed clear programme cards with a simple three-step admission flow.",
    results: `Delivered a fully responsive design and a reusable component library, handed off to developers as organised Figma files. ${NOTE}`,
  },
  {
    title: "Healthy Eating App: UX Case Study",
    category: "Mobile App UX",
    year: "2025",
    role: "UX Researcher & UI Designer",
    tags: ["Mobile App", "UX Research", "Case Study"],
    featured: true,
    summary: "End-to-end case study for an app that helps people build healthier eating habits.",
    overview:
      "A self-initiated case study covering the full UX process: research, personas, journey mapping, wireframes, UI design and a tested prototype.",
    challenge:
      "Many people abandon nutrition apps because logging meals feels like a chore and the advice feels generic.",
    solution:
      "Interviews and a competitive audit revealed that effort and motivation were the real blockers. I designed a quick-log flow, personalised daily goals and gentle progress feedback instead of strict tracking.",
    results: `Produced research artefacts, a clickable prototype and usability findings that shaped the final design. ${NOTE}`,
  },
  {
    title: "PPF & Car Detailing Website",
    category: "Automotive Website",
    year: "2025",
    role: "UI/UX Designer",
    tags: ["Website", "Automotive", "Dark UI"],
    featured: true,
    summary: "A bold, dark-themed website that showcases premium paint-protection services and drives enquiries.",
    overview:
      "A conversion-focused website for a paint protection film and car detailing studio, built around striking visuals and clear service packages.",
    challenge:
      "Customers needed to understand the value of paint protection quickly and trust the studio enough to enquire.",
    solution:
      "I used a high-contrast dark interface with large imagery, simple package comparisons and prominent enquiry calls-to-action throughout the page.",
    results: `Delivered desktop and mobile designs with a clear enquiry flow. ${NOTE}`,
  },
  {
    title: "Interior Design Studio Website",
    category: "Architecture & Interiors",
    year: "2026",
    role: "UI/UX Designer",
    tags: ["Website", "Interior Design", "Portfolio"],
    featured: true,
    summary: "A clean, image-led website that lets an interior studio's work speak for itself.",
    overview:
      "A portfolio-style website for an interior design studio, where elegant layouts and generous whitespace put project photography first.",
    challenge:
      "The studio's strongest asset was its photography, but the old site was cluttered and slow to browse.",
    solution:
      "I designed a minimal grid-based layout with large project galleries, a short process section and a simple consultation booking prompt.",
    results: `Delivered a refined, responsive design system for the studio's site. ${NOTE}`,
  },
  {
    title: "Real Estate Listings Website",
    category: "Real Estate Website",
    year: "2026",
    role: "UI/UX Designer",
    tags: ["Website", "Real Estate", "Search UX"],
    featured: false,
    summary: "A search-first property website with clear filters, trustworthy listings and easy enquiries.",
    overview:
      "A property listings website where buyers can filter, compare and enquire with minimal friction.",
    challenge:
      "Buyers were overwhelmed by too many filters and unclear listing information.",
    solution:
      "I simplified search into progressive filters, standardised the listing card and detail layout, and added a persistent enquiry panel.",
    results: `Delivered responsive designs and a component library for developers. ${NOTE}`,
  },
  {
    title: "SEO Agency Landing Page",
    category: "Landing Page",
    year: "2026",
    role: "UI/UX Designer",
    tags: ["Landing Page", "SEO", "Conversion"],
    featured: false,
    summary: "A high-impact landing page that explains technical services in plain language and converts visitors.",
    overview:
      "A single-page marketing site for an SEO agency, focused on clarity, credibility and a strong call-to-action.",
    challenge:
      "SEO services are abstract, and the agency's old page used jargon that confused first-time visitors.",
    solution:
      "I rewrote the structure around outcomes, used simple visuals to explain the process, and placed social proof and calls-to-action at natural decision points.",
    results: `Delivered a conversion-focused landing page design. ${NOTE}`,
  },
];

// Seeded INACTIVE on purpose. Replace with real quotes (with the client's permission), then activate.
export const testimonials = [1, 2, 3].map((n) => ({
  quote: "[Paste a real client quote here. Ask the client for permission to publish it.]",
  name: "[Client Name]",
  role: "[Role, Company]",
  isActive: false,
  order: n,
}));

// Seeded INACTIVE on purpose. Add only real awards, certificates and recognitions.
export const awards = [
  { year: "2026", title: "[Certification or Award Title]", description: "[Issuer, and what it recognises.]" },
  { year: "2025", title: "[Certification or Award Title]", description: "[Issuer, and what it recognises.]" },
  { year: "2024", title: "[Certification or Award Title]", description: "[Issuer, and what it recognises.]" },
].map((a) => ({ ...a, isActive: false }));

export const articles = [
  {
    title: "5 UX Principles Every Website Should Follow",
    category: "UX Design",
    excerpt: "Five simple, proven principles that make websites easier to use and more likely to convert.",
    content: `## Good UX is mostly good habits

Great websites are rarely the result of one clever idea. They follow a few dependable principles.

### 1. Make the next step obvious
Every screen should have one clear primary action. If visitors have to think about what to do next, you are losing them.

### 2. Keep it consistent
Buttons, spacing and wording should behave the same way everywhere. Consistency builds trust and reduces effort.

### 3. Design for mobile first
Most visitors arrive on a phone. Start with the smallest screen and add complexity as space allows.

### 4. Write for humans
Plain language beats clever jargon. Clear headings and short sentences help people scan.

### 5. Test with real people
Even five quick usability tests will reveal problems your team cannot see anymore.`,
  },
  {
    title: "Why a Design System Saves Time on Every Project",
    category: "Design Systems",
    excerpt: "A small, well-organised set of reusable components speeds up design, development and review.",
    content: `## What is a design system?

A design system is a shared library of colours, typography, spacing and components, plus guidance on how to use them.

### Why it pays off
- **Speed:** designers assemble screens from ready-made parts instead of redrawing buttons.
- **Consistency:** the product looks and behaves the same everywhere.
- **Better handoff:** developers build each component once and reuse it.

### Start small
You do not need a huge system. Begin with colours, type styles, buttons, inputs and cards, then grow it as projects demand.`,
  },
  {
    title: "How to Run a Quick Usability Test With Just 5 People",
    category: "UX Research",
    excerpt: "A simple, low-cost way to find the biggest problems in your design before developers build it.",
    content: `## You do not need a lab

Usability testing can be as simple as watching someone try to complete a task with your prototype.

### A simple process
1. **Pick 3 key tasks**, such as finding pricing or booking a call.
2. **Recruit 5 people** who resemble your real users.
3. **Ask them to think aloud** while they use the prototype, and resist the urge to help.
4. **Note where they hesitate or get lost.**
5. **Fix the biggest problems first**, then test again.

Small, frequent tests catch expensive mistakes while they are still cheap to fix.`,
  },
].map((a, i) => ({ ...a, status: "published", publishedAt: new Date(Date.UTC(2026, 8 - i, 15)) }));

// ---- Copy that lives in the website code (not the database) ----
export const staticCopy = {
  nav: ["Home", "Projects", "About", "Blog", "Contact"],
  contactPage: {
    heading: "Let's build something great together",
    intro:
      "Have a product idea, a website that needs a redesign, or just want to say hello? Share a few details and I will reply within 1 to 2 working days.",
    labels: { name: "Your name", email: "Email address", subject: "What is this about?", message: "Tell me about your project" },
    button: "Send message",
    success: "Thank you! Your message has been sent. I will get back to you soon.",
    error: "Sorry, something went wrong. Please try again or email me directly.",
    privacy: "Your details are only used to reply to your enquiry.",
  },
  newsletter: { placeholder: "Enter your email", success: "You're subscribed!", error: "Please enter a valid email address." },
  notFound: { heading: "Page not found", text: "The page you are looking for does not exist or has moved.", button: "Back to home" },
  emptyStates: {
    projects: "New case studies are on the way. Please check back soon.",
    articles: "No articles yet. Please check back soon.",
  },
  projectDetail: { headings: ["Overview", "The Challenge", "My Solution", "Results"], visit: "Visit Live Site", back: "All Projects" },
};
