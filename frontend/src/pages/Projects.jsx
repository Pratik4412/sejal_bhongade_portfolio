import React from "react";
import heroCercle from "../assets/home-images/hero-cercle.webp";
import AOSWrapper from "../common/AOSWrapper";
import RotatingBadge from "../components/projectPages/RotatingBadge";
import ProjectsGrid from "../components/projectPages/ProjectsGrid";
import MarqueeSection from "../components/homePages/MarqueeSection";
import TestimonialSection from "../components/homePages/TestimonialSection";
import ContactFooter from "../components/homePages/ContactFooter";
import { projectsTestimonial } from "../data/projectsData";

const Projects = () => {
  return (
    <main className="bg-black">
      {/* Hero */}
      {/* <section className="first-bg">
        <div className="second-bg container mx-auto px-5 md:px-10 lg:px-20 pt-10 pb-12 md:pb-20 relative">
          <RotatingBadge className="absolute top-4 right-5 md:top-6 md:right-10 lg:right-20" />

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <h6 className="text-white text-base font-primary">
                Case Studies
              </h6>
              <div className="bg-text-muted h-[1px] w-20"></div>
            </div>

            <AOSWrapper animation="slide-up">
              <h1 className="text-5xl md:text-9xl font-primary font-bold text-white uppercase">
                Amazing
              </h1>
            </AOSWrapper>

            <div className="flex md:items-center md:flex-row flex-col-reverse gap-6">
              <img src={heroCercle} alt="" className="w-40 md:w-fit" />
              <AOSWrapper animation="slide-up">
                <h1 className="text-5xl md:text-9xl font-primary font-bold text-white uppercase">
                  Work
                </h1>
              </AOSWrapper>
            </div>
          </div>
        </div>
      </section> */}
      <section className="first-bg">
        <div
          className="second-bg container mx-auto flex flex-col gap-8 justify-center"
          aria-labelledby="about-hero-title"
        >
          <div className="container relative mx-auto px-5 pb-10 pt-10 md:px-10 md:pb-14 lg:px-20">
            <RotatingBadge className="absolute right-5  md:right-10 md:top-0 lg:right-0" />

            <div className="flex flex-col gap-5">
              {/* Section label */}
              <div className="flex items-center gap-3">
                <h6 className="font-primary text-base text-white">
                  Case Studies
                </h6>
                <div className="bg-text-muted h-[1px] w-20" />
              </div>

              {/* Selected heading */}
              <AOSWrapper animation="slide-up">
                <h1 className="font-primary text-5xl font-bold uppercase text-white md:text-9xl">
                  Selected
                </h1>
              </AOSWrapper>

              {/* Work heading with decorative circle */}
              <div className="flex flex-col-reverse gap-6 md:flex-row md:items-center">
                <img
                  src={heroCercle}
                  alt=""
                  aria-hidden="true"
                  className="w-40 md:w-fit"
                />

                <AOSWrapper animation="slide-up">
                  <h2 className="font-primary text-5xl font-bold uppercase text-white md:text-9xl">
                    Work
                  </h2>
                </AOSWrapper>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectsGrid />
      <MarqueeSection />
      <TestimonialSection data={projectsTestimonial} framed />
      {/* <ContactFooter /> */}
    </main>
  );
};

export default Projects;
