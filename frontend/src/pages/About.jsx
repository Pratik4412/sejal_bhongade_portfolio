import React from "react";
import AboutHero from "../components/aboutPages/AboutHero";
import AboutIntro from "../components/aboutPages/AboutIntro";
import WorkProcess from "../components/aboutPages/WorkProcess";
import TechStack from "../components/aboutPages/TechStack";
import ExperienceSection from "../components/aboutPages/ExperienceSection";
import TestimonialScroller from "../components/aboutPages/TestimonialScroller";
import ServicesSection from "../components/homePages/ServicesSection";
import EducationSection from "../components/aboutPages/EducationSection";
import PrinciplesScroller from "../components/aboutPages/PrinciplesScroller";

const About = () => {
  return (
    <main className="bg-black">
      <AboutHero />
      <AboutIntro />
      <WorkProcess />
      <TechStack />
      <ExperienceSection />
      <EducationSection />
      <ServicesSection />
      <PrinciplesScroller />
      {/* <TestimonialScroller /> */}
    </main>
  );
};

export default About;
