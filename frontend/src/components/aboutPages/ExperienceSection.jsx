import React from "react";
import AOSWrapper from "../../common/AOSWrapper";
import { experiences } from "../../data/aboutData";

const ExperienceSection = () => (
  <section className="bg-black py-16 md:py-24">
    <div className="container mx-auto px-5 md:px-10 lg:px-20 flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h6 className="text-white text-base font-primary">
          Teams I Worked With
        </h6>
        <AOSWrapper animation="slide-up">
          <h2 className="text-4xl md:text-6xl font-primary font-semibold text-white leading-tight">
            My Professional <br /> Experiences
          </h2>
        </AOSWrapper>
      </div>

      <div className="flex flex-col gap-3">
        {experiences.map((e) => (
          <AOSWrapper key={e.id} animation="slide-up">
            <div className="group flex flex-wrap items-center justify-between gap-4 border border-white/10 bg-[#0f0f0f] px-4 py-4 md:px-6 transition-colors hover:border-[#c6f10a]/50">
              <div className="flex items-center gap-4">
                <span
                  className="grid h-10 w-10 place-items-center rounded-full text-black font-bold"
                  style={{ backgroundColor: e.color }}
                >
                  {e.company[0]}
                </span>
                <div>
                  <h3 className="text-sm md:text-base font-primary font-semibold text-white">
                    {e.role}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {e.company} • {e.type}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 ml-auto">
                <span className="flex items-center gap-2 text-xs text-gray-300">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#c6f10a"
                    strokeWidth="2"
                  >
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path d="M3 10h18M8 3v4M16 3v4" />
                  </svg>
                  {e.period}
                </span>
                <span className="grid h-8 w-8 place-items-center border border-white/15 text-white transition-colors group-hover:bg-[#c6f10a] group-hover:text-black">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M7 17L17 7M9 7h8v8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </AOSWrapper>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
