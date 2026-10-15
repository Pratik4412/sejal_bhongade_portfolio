import React from "react";
import AOSWrapper from "../../common/AOSWrapper";
import { education, certifications, languages } from "../../data/aboutData";

// Small outlined icons, drawn inline so no extra assets are needed
const CapIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden="true"
  >
    <path d="M2 9l10-5 10 5-10 5L2 9z" strokeLinejoin="round" />
    <path d="M6 11.5V16c0 1.2 2.7 3 6 3s6-1.8 6-3v-4.5" strokeLinecap="round" />
  </svg>
);

const BadgeIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden="true"
  >
    <circle cx="12" cy="9" r="5" />
    <path
      d="M9 13.5L7.5 21l4.5-2.5 4.5 2.5L15 13.5"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

// One bordered row, same visual style as the Experience section
const Row = ({ icon, title, lines, meta }) => (
  <li className="flex items-start gap-4 border border-white/10 bg-[#0f0f0f] p-4 transition-colors hover:border-[#c6f10a]/50 md:p-5">
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#c6f10a]/50 text-[#c6f10a]">
      {icon}
    </span>
    <div className="min-w-0 flex-1">
      <h4 className="font-primary text-base font-semibold text-white">
        {title}
      </h4>
      {lines.map((line) => (
        <p key={line} className="mt-1 text-sm text-gray-400">
          {line}
        </p>
      ))}
    </div>
    {meta && (
      <span className="shrink-0 rounded-full bg-[#c6f10a]/15 px-3 py-1 text-xs font-medium text-[#c6f10a]">
        {meta}
      </span>
    )}
  </li>
);

const EducationSection = () => (
  <section
    className="bg-black py-16 md:py-24"
    aria-labelledby="education-title"
  >
    <div className="container mx-auto flex flex-col gap-10 px-5 md:px-10 lg:px-20">
      <div className="flex flex-col gap-4">
        <h6 className="font-primary text-base text-white">
          Academic Background
        </h6>
        <AOSWrapper animation="slide-up">
          <h2
            id="education-title"
            className="font-primary text-4xl font-semibold leading-tight text-white md:text-6xl"
          >
            Education &amp; <br className="hidden md:block" /> Certifications
          </h2>
        </AOSWrapper>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Education */}
        <div>
          <h3 className="mb-4 font-primary text-lg font-semibold text-[#c6f10a]">
            Education
          </h3>
          <ul className="flex flex-col gap-3">
            {education.map((e) => (
              <AOSWrapper key={e.id} animation="slide-up">
                <Row
                  icon={<CapIcon />}
                  title={e.degree}
                  lines={[e.institute, e.period]}
                  meta={e.score}
                />
              </AOSWrapper>
            ))}
          </ul>

          {languages.length > 0 && (
            <p className="mt-6 text-sm text-gray-400">
              <span className="font-semibold text-white">Languages: </span>
              {languages.join(", ")}
            </p>
          )}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="mb-4 font-primary text-lg font-semibold text-[#c6f10a]">
            Certifications
          </h3>
          <ul className="flex flex-col gap-3">
            {certifications.map((c) => (
              <AOSWrapper key={c.id} animation="slide-up">
                <Row
                  icon={<BadgeIcon />}
                  title={c.title}
                  lines={[c.issuer, c.period].filter(Boolean)}
                  meta={c.grade}
                />
              </AOSWrapper>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
