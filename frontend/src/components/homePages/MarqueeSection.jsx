import React from "react";
import { marqueeWords, startImg } from "../../data/homeData";

const Track = () => (
  <div className="flex shrink-0 items-center gap-8 pr-8" aria-hidden="true">
    {[...marqueeWords, ...marqueeWords].map((word, i) => (
      <React.Fragment key={`${word}-${i}`}>
        <span className="text-4xl md:text-6xl font-primary font-semibold text-white whitespace-nowrap">
          {word}
        </span>
        <img src={startImg} alt="" className="w-5 md:w-7 shrink-0" />
      </React.Fragment>
    ))}
  </div>
);

const MarqueeSection = () => (
  <section className="overflow-hidden py-10 md:py-16 bg-black">
    <div className="flex w-max animate-marquee">
      <Track />
      <Track />
    </div>
  </section>
);

export default MarqueeSection;
