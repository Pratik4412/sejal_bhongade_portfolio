import React from "react";
import AOSWrapper from "../../common/AOSWrapper";
import { philosophy } from "../../data/homeData";

const QuoteMark = () => (
  <svg
    width="48"
    height="40"
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

/**
 * Personal statement section (replaces the old client-testimonial block).
 * - `data`   : override the default content from homeData.js (same shape as `philosophy`)
 * - `framed` : tilted photo with a white border (used on the Projects page)
 */
const DesignPhilosophy = ({ data = philosophy, framed = false }) => (
  <section
    className="bg-[#0b0b0b] py-16 md:py-24"
    aria-labelledby="philosophy-title"
  >
    <div className="container mx-auto flex flex-col gap-10 px-5 md:px-10 lg:px-20">
      <div className="flex flex-col gap-4">
        <h6 className="font-primary text-base text-white">{data.label}</h6>
        <AOSWrapper animation="slide-up">
          <h2
            id="philosophy-title"
            className="font-primary text-4xl font-semibold text-white md:text-6xl"
          >
            {data.title}
          </h2>
        </AOSWrapper>
      </div>

      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-8">
          <QuoteMark />

          <blockquote className="font-primary text-lg font-medium leading-relaxed text-white md:text-2xl">
            {data.statement}
          </blockquote>

          {/* Short principles as pills */}
          {data.principles?.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {data.principles.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[#c6f10a]/40 px-4 py-1.5 text-xs text-[#c6f10a] md:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}

          <div>
            <p className="font-primary font-semibold text-white">{data.name}</p>
            <p className="text-sm text-gray-400">{data.role}</p>
          </div>
        </div>

        <div className="w-full md:max-w-md md:justify-self-end">
          <img
            src={data.image}
            alt={data.imageAlt || data.name}
            loading="lazy"
            decoding="async"
            className={
              framed
                ? "h-auto w-full rotate-6 border-[10px] border-white object-cover shadow-xl"
                : "h-auto w-full rounded-md object-cover"
            }
          />
        </div>
      </div>
    </div>
  </section>
);

export default DesignPhilosophy;
