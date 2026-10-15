import React from "react";
import icon_flash from "../../assets/home-images/icon-flash.webp";
import manImge from "../../assets/home-images/manImge.png";
import { about_me_home } from "../../data/text";
import AOSWrapper from "../../common/AOSWrapper";
const AboutSection = () => {
  const abut_para = [
    {
      text: "I'm a UI/UX and graphic designer based in Pune, with 5+ years of experience designing user-centred digital products for startups and agencies. I started in graphic design and grew into UX, and that mix shows in my work: interfaces that are clear and usable, and also look polished and on-brand.",
    },
    {
      text: "Today I design AI-powered SaaS products, translating complex workflows into clean, accessible screens. Before that I designed responsive websites and high-conversion landing pages for 15+ client projects. I work in Agile teams, build reusable design systems, and hand over organised files so developers can build exactly what was designed.",
    },
  ];
  return (
    <main className="container mx-auto">
      <section className="px-5 md:px-10 lg:px-20 py-16 md:py-24">
        <div className="flex items-center w-full ">
          <div className="w-full flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <h6 className="text-white text-lg font-primary">About Me</h6>
              <div className="bg-text-muted h-[1px] w-20"></div>
            </div>
            <AOSWrapper animation="slide-up">
              <h1 className="text-5xl md:text-7xl font-primary font-bold text-white">
                Passion for
                <br className="hidden md:block" /> Digital Innovation
              </h1>
            </AOSWrapper>
          </div>
          <div className="">
            <img
              src={icon_flash}
              alt="flash-icon"
              className="animate-bounce [animation-duration:2s]"
            />
          </div>
        </div>
        <div className="flex items-center gap-20">
          <img src={manImge} alt="aboutProfileImage" />
          <div className="w-1/2 flex flex-col gap-8">
            {abut_para.map((item, i) => (
              <AOSWrapper key={i} delay={i * 200} animation="slide-up">
                <p className="text-base text-gray-200 font-secondary ">
                  {item.text}
                </p>
              </AOSWrapper>
            ))}
            <div className="flex items-center gap-3">
              {about_me_home.map((item, i) => (
                <AOSWrapper key={i} delay={i * 200} animation="fade-right">
                  <div className="flex items-center gap-4">
                    <div>
                      <h2 className="text-lg text-primary font-semibold font-primary">
                        {item.number}
                      </h2>
                      <h6 className="text-base text-gray-200 font-secondary">
                        {item.title}
                      </h6>
                    </div>
                    {i === 0 || i === 1 ? (
                      <div className="w-[1px] bg-gray-400 h-[40px]"></div>
                    ) : null}
                  </div>
                </AOSWrapper>
              ))}
            </div>
            <div>
              <button class="circle-btn">
                <span class="fill"></span>
                <span class="text">ABOUT ME</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutSection;
