import React from "react";
import { Link, NavLink } from "react-router-dom";
import { header_link, social_media } from "../data/text";

import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (
    <section className="bg-footer-bg">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 py-4 flex flex-col gap-10">
        <div className="w-full flex flex-col gap-6 justify-center items-center">
          <h1 className="text-primary text-3xl md:text-7xl lg:text-[160px] font-primary font-semibold">
            Let's Talk
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-5xl font-primary font-normal text-white">
            <a
              href="mailto:sejalbhongade29@gmail.com"
              className="hover:text-primary-400 transition"
            >
              sejalbhongade29@gmail.com
            </a>
          </h2>
          <button class="circle-btn">
            <span class="fill"></span>
            <span class="text">CONTACT</span>
          </button>
        </div>
        <div className="flex items-start flex-col md:flex-row justify-between gap-5 w-full">
          <div className="flex flex-col gap-3 w-full">
            <h3 className="text-xl font-semibold text-white font-primary">
              About Us
            </h3>
            <p className="text-base font-normal text-white font-secondary">
              At onnat we are a dynamic creative agency dedicated to
              transforming your vision into captivating digital experiences.
            </p>
            <div className="flex items-center gap-2">
              {social_media.map((social, i) => (
                <Link
                  to={social.path}
                  target="_blank"
                  className="w-8 h-8 rounded-full bg-body-bg hover:bg-primary text-white hover:text-footer-bg flex items-center justify-center"
                >
                  <span>{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex md:justify-center w-full">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl text-white ">Navigation</h3>
              <nav className="flex flex-col gap-1">
                {header_link.map((item, i) => (
                  <NavLink
                    key={i}
                    to={item.url}
                    className="text-base text-white hover:text-primary"
                  >
                    {item.title}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
          <div className="flex items-center md:justify-end w-full">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl text-white ">Navigation</h3>
              <div className="flex items-center gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-full bg-transparent border border-primary-700 text-white outline-none focus:border-primary transition"
                />
                <button className="group relative bg-primary p-3 rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_#C8F31D]">
                  <span className="absolute inset-0 bg-primary-400 scale-0 rounded-full transition-transform duration-300 group-hover:scale-100"></span>
                  <span className="relative z-10 text-footer-bg text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <GoArrowUpRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-text-muted w-full h-[1px]"></div>
        <div className="flex flex-col gap-4">
          <h6 className="text-sm text-white font-primary">
            © 2024 All rights for Pentaclay
          </h6>
          <h1 className="lg:text-[298px] md:text-9xl text-5xl w-full text-center text-white font-primary font-semibold">
            Sejal
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Footer;
