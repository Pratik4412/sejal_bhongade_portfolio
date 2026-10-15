import React from "react";
import startImg from "../assets/home-images/start-shape.png";
import heroCercle from "../assets/home-images/hero-cercle.webp";
import AboutSection from "../components/homePages/AboutSection";
import MarqueeSection from "../components/homePages/MarqueeSection";
import ServicesSection from "../components/homePages/ServicesSection";
import PortfolioSection from "../components/homePages/PortfolioSection";
// import TestimonialSection from "../components/homePages/TestimonialSection";
import AwardsSection from "../components/homePages/AwardsSection";
import BlogSection from "../components/homePages/BlogSection";
import ContactFooter from "../components/homePages/ContactFooter";
import AOSWrapper from "../common/AOSWrapper";
import DesignPhilosophy from "../components/homePages/DesignPhilosophy";

const Home = () => {
  return (
    <main>
      <section className="first-bg">
        <div className="second-bg container mx-auto px-5 md:px-10 lg:px-20 py-4 flex flex-col gap-8 justify-center">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <h6 className="text-white text-lg font-primary">Hi, I’m Sejal</h6>
              <div className="bg-text-muted h-[1px] w-20"></div>
            </div>
            <div className="relative md:initial flex md:w-fit w-full md:items-center md:flex-row flex-col-reverse gap-3">
              <AOSWrapper animation="slide-up">
                <h1 className="text-5xl md:text-9xl font-primary font-bold text-white">
                  DESIGN
                </h1>
              </AOSWrapper>
              <img
                src={startImg}
                alt=""
                className="absolute md:initial top-0 right-0 md:-right-2/4 animate-spin [animation-duration:4s] w-20 md:w-fit"
              />
            </div>
            <div className="flex md:items-center md:flex-row flex-col-reverse gap-6">
              <img src={heroCercle} alt="heroImage" className="w-40 md:w-fit" />
              <AOSWrapper animation="slide-up">
                <h1 className="text-5xl md:text-9xl font-primary font-bold text-white">
                  PARTNER
                </h1>
              </AOSWrapper>
            </div>
            <AOSWrapper animation="slide-up">
              <p className="text-base md:text-lg text-gray-200">
                {" "}
                A UI/UX designer, graphic designer, creative thinker,
                photography lover, <br className="hidden md:block" />
                AI explorer, and of course, someone who always brings a business{" "}
                <br className="hidden md:block" />
                point of view as a content creator. If there’s a creative corner{" "}
                where <br className="hidden md:block" />I can add value, I’d
                love to share my ideas, energy, and vision for{" "}
                <br className="hidden md:block" />
                next-level growth. Here are my some work which i want to
                showcase.
              </p>
            </AOSWrapper>
          </div>
          <div>
            <button className="circle-btn">
              <span className="fill"></span>
              <span className="text">LET'S TALK</span>
            </button>
          </div>
        </div>
      </section>

      <AboutSection />
      <MarqueeSection />
      <ServicesSection />
      <PortfolioSection />
      <DesignPhilosophy />
      {/* <TestimonialSection /> */}
      <AwardsSection />
      {/* <BlogSection /> */}
      {/* <ContactFooter /> */}
    </main>
  );
};

export default Home;
