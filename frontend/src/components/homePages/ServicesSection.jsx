import React, { useState } from "react";
import { Link } from "react-router-dom";
import AOSWrapper from "../../common/AOSWrapper";
import { services as staticServices } from "../../data/homeData";

/**
 * Accordion list: click a row to read its description in place (no dead links).
 * Props are optional so the same component works with API data later:
 *   <ServicesSection services={apiServices} heading={settings.sections.services} />
 */
const ServicesSection = ({
  services = staticServices,
  heading = { label: "Services", title: "Expertise Solutions" },
}) => {
  const [openIndex, setOpenIndex] = useState(0); // first service open by default

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          {heading.label && (
            <h6 className="text-white text-base font-primary">
              {heading.label}
            </h6>
          )}
          <AOSWrapper animation="slide-up">
            <h2 className="text-4xl md:text-6xl font-primary font-semibold text-white">
              {heading.title}
            </h2>
          </AOSWrapper>
        </div>

        <ul className="flex flex-col">
          {services.map((s, i) => {
            const isOpen = openIndex === i;
            const number = String(i + 1).padStart(2, "0");
            const panelId = `service-panel-${i}`;

            return (
              <li
                key={s._id || s.id || s.title}
                className="border-t border-white/15 last:border-b"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="group flex w-full items-center justify-between gap-4 py-6 text-left md:py-8"
                >
                  <span
                    className={`text-xl md:text-2xl font-primary font-medium transition-colors group-hover:text-[#c6f10a] ${
                      isOpen ? "text-[#c6f10a]" : "text-white"
                    }`}
                  >
                    {number}. {s.title}
                  </span>
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-300 md:h-12 md:w-12 ${
                      isOpen
                        ? "border-[#c6f10a] bg-[#c6f10a] text-black rotate-45"
                        : "border-white/20 text-white group-hover:border-[#c6f10a]"
                    }`}
                  >
                    {/* plus icon: rotates into a cross when open */}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>

                {/* grid-rows trick animates height from 0 to auto without JS measuring */}
                <div
                  id={panelId}
                  role="region"
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-5 pb-8 md:max-w-2xl md:pb-10">
                      <p className="text-base md:text-lg text-gray-400">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;
