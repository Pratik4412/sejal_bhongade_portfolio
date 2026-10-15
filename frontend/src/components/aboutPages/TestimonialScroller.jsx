import React from "react";
import AOSWrapper from "../../common/AOSWrapper";
import { scrollingTestimonials } from "../../data/aboutData";

const Quote = () => (
  <svg
    width="40"
    height="34"
    viewBox="0 0 48 40"
    fill="none"
    stroke="#c6f10a"
    strokeWidth="2"
    aria-hidden="true"
  >
    <rect x="1" y="1" width="18" height="30" rx="2" />
    <rect x="27" y="1" width="18" height="30" rx="2" />
  </svg>
);

const Item = ({ t }) => (
  <article className="flex flex-col gap-5 py-8">
    <Quote />
    <p className="text-sm md:text-base font-primary font-medium text-white leading-relaxed">
      {t.quote}
    </p>
    <div>
      <p className="text-sm text-white font-primary font-semibold">{t.name}</p>
      <p className="text-xs text-gray-400">{t.role}</p>
    </div>
  </article>
);

const TestimonialScroller = () => (
  <section className="bg-[#0b0b0b] py-16 md:py-24">
    <div className="container mx-auto px-5 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="flex flex-col gap-4">
        <h6 className="text-white text-base font-primary">Testimonial</h6>
        <AOSWrapper animation="slide-up">
          <h2 className="text-4xl md:text-6xl font-primary font-semibold text-white leading-tight">
            What my <br /> clients say
          </h2>
        </AOSWrapper>
      </div>

      {/* Vertical auto-scroll with soft fade at top and bottom */}
      <div
        className="relative h-[460px] overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, #000 15%, #000 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, #000 15%, #000 85%, transparent)",
        }}
      >
        <div className="animate-marquee-y hover:[animation-play-state:paused]">
          {[...scrollingTestimonials, ...scrollingTestimonials].map((t, i) => (
            <Item key={`${t.id}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialScroller;
