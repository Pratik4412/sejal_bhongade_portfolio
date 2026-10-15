import React from "react";
import AOSWrapper from "../../common/AOSWrapper";
import { skillChecks, techStack } from "../../data/aboutData";

const Check = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#c6f10a"
    strokeWidth="3"
    aria-hidden="true"
  >
    <path d="M5 12l5 5 9-10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TechStack = () => (
  <section className="bg-[#0b0b0b] py-16 md:py-24">
    <div className="container mx-auto px-5 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="flex flex-col gap-6">
        <h6 className="text-white text-base font-primary">
          Professional Skills
        </h6>
        <AOSWrapper animation="slide-up">
          <h2 className="text-4xl md:text-6xl font-primary font-semibold text-white">
            Tech Stack
          </h2>
        </AOSWrapper>

        <ul className="grid grid-cols-2 gap-x-6 gap-y-3 max-w-md">
          {skillChecks.map((s) => (
            <li key={s} className="flex items-center gap-2 text-sm text-white">
              <Check />
              {s}
            </li>
          ))}
        </ul>

        <div>
          <button className="circle-btn">
            <span className="fill"></span>
            <span className="text">CONTACT</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 md:gap-6 md:justify-self-end">
        {techStack.map((t) => (
          <AOSWrapper key={t.name} animation="slide-up">
            {/* <div className="flex flex-col items-center gap-3 rounded-full border border-white/10 bg-[#111] px-3 py-5 md:px-5 md:py-7">
              {t.icon ? (
                <img
                  src={t.icon}
                  alt={t.name}
                  className="h-10 w-10 md:h-12 md:w-12"
                />
              ) : (
                <span
                  className="grid h-10 w-10 md:h-12 md:w-12 place-items-center rounded-md font-primary font-bold text-white"
                  style={{ backgroundColor: t.color }}
                >
                  {t.name[0]}
                </span>
              )}
              <span className="text-[10px] md:text-xs text-gray-400">
                {t.name}
              </span>
            </div> */}
            <div className="flex flex-col items-center gap-3 rounded-full border border-white/10 bg-[#111] px-3 py-5 md:px-5 md:py-7">
              <div
                className="grid h-10 w-10 place-items-center md:h-12 md:w-12"
                style={{ color: t.color }}
              >
                {t.icon ? (
                  <t.icon size={42} aria-hidden="true" />
                ) : (
                  <span className="font-primary text-2xl font-bold">
                    {t.name[0]}
                  </span>
                )}
              </div>

              <span className="text-center text-[10px] text-gray-400 md:text-xs">
                {t.name}
              </span>
            </div>
          </AOSWrapper>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
