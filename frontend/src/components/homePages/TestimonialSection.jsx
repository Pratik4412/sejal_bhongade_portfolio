import React from "react";
import AOSWrapper from "../../common/AOSWrapper";
import { testimonial } from "../../data/homeData";

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

const TestimonialSection = () => (
  <section className="bg-[#0b0b0b] py-16 md:py-24">
    <div className="container mx-auto px-5 md:px-10 lg:px-20 flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h6 className="text-white text-base font-primary">Testimonials</h6>
        <AOSWrapper animation="slide-up">
          <h2 className="text-4xl md:text-6xl font-primary font-semibold text-white">
            What my clients say
          </h2>
        </AOSWrapper>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-8">
          <QuoteMark />
          <p className="text-lg md:text-2xl font-primary font-medium text-white leading-relaxed">
            {testimonial.quote}
          </p>
          <div>
            <p className="text-white font-primary font-semibold">
              {testimonial.name}
            </p>
            <p className="text-sm text-gray-400">{testimonial.role}</p>
          </div>
        </div>
        <div className="md:justify-self-end w-full md:max-w-md">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            loading="lazy"
            className="w-full h-auto rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialSection;
