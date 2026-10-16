import React from "react";
import icon_flash from "../../assets/home-images/icon-flash.webp";
import manImge from "../../assets/home-images/manImge.png";
import { about_me_home } from "../../data/text";
import AOSWrapper from "../../common/AOSWrapper";

// Page copy lives outside the component so it is easy to edit (or replace with API data later)
const ABOUT_PARAGRAPHS = [
  "I'm a UI/UX and graphic designer based in Pune, with 5+ years of experience designing user-centred digital products for startups and agencies. I started in graphic design and grew into UX, and that mix shows in my work: interfaces that are clear and usable, and also look polished and on-brand.",
  "Today I design AI-powered SaaS products, translating complex workflows into clean, accessible screens. Before that I designed responsive websites and high-conversion landing pages for 15+ client projects. I work in Agile teams, build reusable design systems, and hand over organised files so developers can build exactly what was designed.",
];

/**
 * Home page "About Me" teaser.
 *
 * Layout:  mobile  -> heading, photo, text, stats, button (single column)
 *          md+     -> photo on the left, text on the right (two equal columns)
 */
const AboutSection = () => (
  <section
    className="container mx-auto px-5 py-16 md:px-10 md:py-20 lg:px-20 lg:py-24"
    aria-labelledby="home-about-title"
  >
    {/* Heading row: the icon stays beside the title and shrinks on small screens */}
    <div className="flex items-start justify-between gap-4">
      <div className="flex min-w-0 flex-col gap-4">
        <div className="flex items-center gap-3">
          <h6 className="font-primary text-base text-white md:text-lg">About Me</h6>
          <div className="h-[1px] w-14 bg-text-muted md:w-20" aria-hidden="true" />
        </div>

        <AOSWrapper animation="slide-up">
          <h2
            id="home-about-title"
            className="font-primary text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Passion for
            <br className="hidden sm:block" /> Digital Innovation
          </h2>
        </AOSWrapper>
      </div>

      <img
        src={icon_flash}
        alt=""
        aria-hidden="true"
        className="w-10 shrink-0 animate-bounce [animation-duration:2s] motion-reduce:animate-none sm:w-14 md:w-20"
      />
    </div>

    {/* Body */}
    <div className="mt-10 grid grid-cols-1 items-center gap-10 md:mt-14 md:grid-cols-2 lg:gap-20">
      {/* Photo: capped on phones so it is not huge, never wider than its column */}
      <div className="mx-auto w-full max-w-xs sm:max-w-sm md:mx-0 md:max-w-none">
        <img
          src={manImge}
          alt="Sejal Bhongade, UI/UX and graphic designer"
          loading="lazy"
          decoding="async"
          className="h-auto w-full"
        />
      </div>

      <div className="flex flex-col gap-6 md:gap-8">
        {ABOUT_PARAGRAPHS.map((text, i) => (
          <AOSWrapper key={text.slice(0, 30)} delay={i * 200} animation="slide-up">
            <p className="font-secondary text-sm leading-7 text-gray-200 sm:text-base">{text}</p>
          </AOSWrapper>
        ))}

        {/* Stats: always one row of equal columns, with divider lines between them */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6">
          {about_me_home.map((item, i) => (
            <AOSWrapper key={item.title} delay={i * 200} animation="fade-right">
              <div className={`h-full ${i > 0 ? "border-l border-gray-500/60 pl-3 sm:pl-6" : ""}`}>
                <h3 className="font-primary text-xl font-semibold text-primary sm:text-2xl">{item.number}</h3>
                <p className="mt-1 font-secondary text-xs leading-snug text-gray-200 sm:text-base">{item.title}</p>
              </div>
            </AOSWrapper>
          ))}
        </div>

        <div>
          <button type="button" className="circle-btn">
            <span className="fill" />
            <span className="text">ABOUT ME</span>
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;