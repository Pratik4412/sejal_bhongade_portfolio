import React from "react";
import AOSWrapper from "../../common/AOSWrapper";
import { awards } from "../../data/homeData";

const AwardsSection = () => (
  <section className="bg-black py-16 md:py-24">
    <div className="container mx-auto px-5 md:px-10 lg:px-20 flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h6 className="text-white text-base font-primary">Excellency Awards</h6>
        <AOSWrapper animation="slide-up">
          <h2 className="text-4xl md:text-6xl font-primary font-semibold text-white">
            Licenses &amp; Certifications
          </h2>
        </AOSWrapper>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
        {awards.map((a) => (
          <AOSWrapper key={a.year} animation="slide-up">
            <article className="flex items-start gap-5 border-t border-white/15 pt-6">
              <span
                className="text-5xl md:text-6xl font-primary font-bold text-transparent leading-none select-none"
                style={{
                  WebkitTextStroke: "1px rgba(255,255,255,0.35)",
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                {a.year}
              </span>
              <div className="flex flex-col gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-white/25">
                  <span className="h-2.5 w-2.5 rounded-full bg-white" />
                </span>
                <h3 className="text-lg font-primary font-semibold text-white">
                  {a.title}
                </h3>
                <p className="text-sm text-gray-400 max-w-xs">
                  {a.description}
                </p>
                {a.credentialUrl && (
                  <a
                    href={a.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#c6f10a] hover:underline"
                  >
                    Show Credential
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          </AOSWrapper>
        ))}
      </div>
    </div>
  </section>
);

export default AwardsSection;
