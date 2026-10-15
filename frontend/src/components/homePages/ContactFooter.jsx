import React, { useState } from "react";
import { Link } from "react-router-dom";
import { footerLinks } from "../../data/homeData";

const toPath = (label) =>
  label === "Home"
    ? "/"
    : `/${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

const ContactFooter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // TODO: wire to newsletter API
    setEmail("");
  };

  return (
    <footer className="bg-black pt-16 md:pt-24 overflow-hidden">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 flex flex-col gap-16">
        {/* CTA */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-5xl md:text-8xl font-primary font-bold uppercase text-[#c6f10a]">
            Let&apos;s Talk
          </h2>
          <a
            href="mailto:hello@pentaclay.com"
            className="text-2xl md:text-5xl font-primary font-semibold text-white hover:text-[#c6f10a] transition-colors"
          >
            hello@pentaclay.com
          </a>
          <button className="circle-btn">
            <span className="fill"></span>
            <span className="text">CONTACT</span>
          </button>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <h4 className="text-white font-primary font-semibold">About Us</h4>
            <p className="text-gray-400 max-w-xs">
              An creative agency dedicated to transforming your digital
              experiences.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-white font-primary font-semibold">
              Navigation
            </h4>
            {footerLinks.navigation.map((l) => (
              <Link
                key={l}
                to={toPath(l)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {l}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-white font-primary font-semibold">Services</h4>
            {footerLinks.services.map((l) => (
              <Link
                key={l}
                to="/services"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {l}
              </Link>
            ))}
          </div>

          <form
            onSubmit={handleSubscribe}
            className="col-span-2 md:col-span-1 flex flex-col gap-3"
          >
            <h4 className="text-white font-primary font-semibold">
              Newsletter
            </h4>
            <div className="flex items-center gap-3 border-b border-white/20 pb-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-transparent text-white placeholder:text-gray-500 outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="h-4 w-4 shrink-0 rounded-full bg-[#c6f10a]"
              />
            </div>
          </form>
        </div>

        <p className="text-xs text-gray-500">© 2024 All rights for Pentaclay</p>
      </div>

      {/* Giant wordmark */}
      <div className="mt-6 select-none text-center font-primary font-bold uppercase leading-none text-white text-[22vw] md:text-[18vw] -mb-[3vw]">
        Pentos
      </div>
    </footer>
  );
};

export default ContactFooter;
