/**
 * Generates PORTFOLIO_CONTENT.md (page-by-page website copy) from seed/content.js.
 * Run:  npm run content:export      (no database needed)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as c from "./content.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.resolve(here, "../../PORTFOLIO_CONTENT.md");

const s = c.siteContent;
const sec = s.sections;
const L = [];
const add = (...lines) => L.push(...lines, "");
const para = (text) => text.split("\n\n").forEach((p) => add(p));
const heading = (o) => [o.label, [o.title, o.titleLine2].filter(Boolean).join(" ")].filter(Boolean).join("  |  ");

add(`# ${s.siteName}: Portfolio Website Content`);
add(
  "Page-by-page copy for a UI/UX designer portfolio with about 2 years of experience. Written in the first person, in plain, friendly language that clients can skim.",
  "**How to use this file:** the same copy is loaded into the database by `npm run seed`, so you can edit everything later from the admin panel.",
  "**Placeholders:** anything in `[square brackets]` must be replaced with real details. Testimonials, awards and result metrics are deliberately left as placeholders: only publish real client quotes, real achievements and numbers the client has confirmed."
);

add("## 0. Global (every page)");
add(`- **Site name:** ${s.siteName}`, `- **Navigation:** ${c.staticCopy.nav.join(" · ")}`, `- **Header button:** Contact`);
add(`- **SEO title (max 70 chars):** ${s.seo.title}`, `- **SEO description (max 170 chars):** ${s.seo.description}`);
add(`- **Footer about text:** ${s.footer.aboutText}`, `- **Copyright:** ${s.footer.copyright}`);
add(`- **Social links:** ${s.footer.socials.map((x) => x.platform).join(", ")} (add URLs in admin; empty ones should be hidden)`);
add(`- **Footer service links:** ${c.services.map((x) => x.title).join(" · ")}`);
add(`- **Newsletter placeholder:** ${c.staticCopy.newsletter.placeholder}`);

add("## 1. Home");
add("### Hero");
add(`- **Greeting:** ${s.hero.greeting}`, `- **Headline:** ${s.hero.titleLine1} / ${s.hero.titleLine2}`, `- **Button:** ${s.hero.ctaLabel}`);
add(`> ${s.hero.description}`);
add(`### About teaser  (${heading(sec.aboutIntro)} → "${s.about.title}")`);
para(s.about.description);
add(...s.about.stats.map((x) => `- **${x.value}** ${x.label}`));
add(`### Marquee strip`, s.marqueeWords.join("  ✦  "));
add(`### Services  (${heading(sec.services)})`);
add(...c.services.map((x, i) => `${i + 1}. **${x.title}**: ${x.description}`));
add(`### Portfolio  (${heading(sec.portfolio)})`, "Shows the projects marked *Featured*:");
add(...c.projects.filter((p) => p.featured).map((p) => `- ${p.title} (${p.category})`));
add(`### Testimonials  (${heading(sec.testimonials)})`);
add("*Placeholders, hidden until you add real quotes.* Template to send to clients:");
add("> Hi [Name], could you share 2 to 3 sentences about working with me? What problem did we solve, and how was the experience? May I publish your name, role and company next to it?");
add(`### Awards  (${heading(sec.awards)})`, "*Hidden until you add real entries (certificates, hackathons, recognitions).* Fields: year · title · short description.");
add(`### Blog  (${heading(sec.blog)})`, ...c.articles.map((a) => `- ${a.title} (${a.category})`));
add(`### Contact call-to-action`, `**${sec.contactCta.title}**  ·  ${s.contact.email}  ·  Button: CONTACT`);

add(`## 2. About page`);
add(`### Hero  (${heading(sec.aboutPage)})`, "Wide banner photo (you at work or with a team).");
add(`### Intro  (${heading(sec.aboutIntro)})`);
para(s.about.description);
add(`- **Email:** ${s.about.email}`, `- **Phone:** ${s.about.phone}`);
add(`### Work process  (${heading(sec.process)})`);
add(...c.processSteps.map((x, i) => `${i + 1}. **${x.title}**: ${x.description}`));
add(`### Tech stack  (${heading(sec.techStack)})`, `Checklist: ${s.skillChecks.join(" · ")}`, `Tools: ${c.tools.map((t) => t.name).join(" · ")}`);
add(`### Experience  (${heading(sec.experience)})`);
add(...c.experiences.map((e) => `- **${e.role}**, ${e.company} (${e.employmentType}, ${e.period}): ${e.description}`));
add(`### Services  (${heading(sec.services)})`, "Same list as Home.");
add(`### Testimonials  (${heading(sec.testimonials)})`, "Same as Home.");

add(`## 3. Projects page  (${heading(sec.projectsPage)})`);
add("Each card shows the top of the full-page screenshot; hover scrolls it and click opens the full image. Each project also has a case-study page:");
c.projects.forEach((p, i) => {
  add(`### 3.${i + 1} ${p.title}`);
  add(`*${p.category} · ${p.year} · ${p.role} · Tags: ${p.tags.join(", ")}*`, `**Summary:** ${p.summary}`);
  add(`**${c.staticCopy.projectDetail.headings[0]}:** ${p.overview}`, `**${c.staticCopy.projectDetail.headings[1]}:** ${p.challenge}`);
  add(`**${c.staticCopy.projectDetail.headings[2]}:** ${p.solution}`, `**${c.staticCopy.projectDetail.headings[3]}:** ${p.results}`);
});

add("## 4. Blog page");
add(`Heading: ${heading(sec.blog)}`);
c.articles.forEach((a, i) => {
  add(`### 4.${i + 1} ${a.title}`, `*${a.category}* · ${a.excerpt}`, a.content);
});
add(`Empty state: ${c.staticCopy.emptyStates.articles}`);

add("## 5. Contact page");
const cp = c.staticCopy.contactPage;
add(`- **Heading:** ${cp.heading}`, `- **Intro:** ${cp.intro}`);
add(`- **Form labels:** ${Object.values(cp.labels).join(" · ")}`, `- **Button:** ${cp.button}`);
add(`- **Success message:** ${cp.success}`, `- **Error message:** ${cp.error}`, `- **Privacy note:** ${cp.privacy}`);
add(`- **Details:** ${s.contact.email} · ${s.contact.phone} · ${s.contact.location}`);

add("## 6. Utility pages");
add(`- **404:** ${c.staticCopy.notFound.heading}. ${c.staticCopy.notFound.text} (Button: ${c.staticCopy.notFound.button})`);
add(`- **Empty projects:** ${c.staticCopy.emptyStates.projects}`);

add("## 7. Before you publish: checklist");
add(
  "- [ ] Replace every `[placeholder]` (company names, emails, phone, awards, testimonials).",
  "- [ ] Confirm project descriptions with your real role and each client's permission to show the work.",
  "- [ ] Add a measurable result to each case study only if it is true and confirmed.",
  "- [ ] Upload full-page screenshots (under 10MB each if you use Cloudinary's free plan).",
  "- [ ] Add alt text and social links; set the SEO title and description.",
  "- [ ] Mark your best 4 projects as *Featured* for the Home page."
);

fs.writeFileSync(out, L.join("\n"));
console.log(`Written ${out}`);
