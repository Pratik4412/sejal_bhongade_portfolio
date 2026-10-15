import React, { useState } from "react";
import { header_link } from "../data/text.jsx";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-header-bg border-b border-[#1f1f1f] sticky top-0 z-50">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" />
          <h5 className="text-white text-xl font-primary font-semibold">
            Sejal
          </h5>
        </div>

        <nav className="hidden md:flex items-center gap-10 relative">
          {header_link.map((item, i) => (
            <NavLink
              key={i}
              to={item.url}
              className={({ isActive }) =>
                `relative font-secondary text-sm tracking-wide transition
                ${
                  isActive
                    ? "text-primary after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-primary"
                    : "text-gray-400 hover:text-primary"
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:block">
          <button className="btn-primary">Contact</button>
        </div>

        <button
          className="md:hidden text-primary text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-6 flex flex-col gap-6 bg-[#0f0f0f]">
          {header_link.map((item, i) => (
            <NavLink
              key={i}
              to={item.url}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-secondary text-sm tracking-wide transition
                ${
                  isActive ? "text-primary" : "text-gray-400 hover:text-primary"
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}

          <button className="btn-primary w-full mt-2">Contact</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
