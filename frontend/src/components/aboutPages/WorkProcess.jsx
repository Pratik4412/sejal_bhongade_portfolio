import React from "react";
import AOSWrapper from "../../common/AOSWrapper";
import { workProcess } from "../../data/aboutData";

const icons = [
  // Discovery
  <svg
    key="1"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4" />
  </svg>,
  // Strategy
  <svg
    key="2"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M12 3l9 5-9 5-9-5 9-5z" />
    <path d="M3 13l9 5 9-5" />
  </svg>,
  // Implementation
  <svg
    key="3"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
  </svg>,
];

const WorkProcess = () => (
  <section className="bg-black pb-16 md:pb-24">
    <div className="container mx-auto px-5 md:px-10 lg:px-20 flex flex-col gap-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-3">
          <h6 className="text-white text-base font-primary">
            My Linear Process
          </h6>
          <div className="bg-text-muted h-[1px] w-16"></div>
        </div>
        <AOSWrapper animation="slide-up">
          <h2 className="text-4xl md:text-6xl font-primary font-semibold text-white">
            Work Process
          </h2>
        </AOSWrapper>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border border-white/15">
        {workProcess.map((step, i) => (
          <AOSWrapper key={step.id} animation="slide-up">
            <article className="flex h-full flex-col gap-4 p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/15 last:border-0">
              <span className="text-[#c6f10a]">{icons[i]}</span>
              <h3 className="text-lg font-primary font-semibold text-white">
                {step.title}
              </h3>
              <p className="text-sm text-gray-400">{step.text}</p>
            </article>
          </AOSWrapper>
        ))}
      </div>
    </div>
  </section>
);

export default WorkProcess;
