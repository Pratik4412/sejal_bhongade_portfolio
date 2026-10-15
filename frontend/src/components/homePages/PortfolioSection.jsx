// import React from "react";
// import AOSWrapper from "../../common/AOSWrapper";
// import { projects, startImg } from "../../data/homeData";

// const PortfolioSection = () => (
//   <section className="bg-black py-16 md:py-24">
//     <div className="container mx-auto px-5 md:px-10 lg:px-20 flex flex-col gap-12">
//       <div className="flex items-center justify-center gap-4">
//         <AOSWrapper animation="slide-up">
//           <h2 className="text-5xl md:text-8xl font-primary font-bold text-white uppercase">
//             Portfolio
//           </h2>
//         </AOSWrapper>
//         <img
//           src={startImg}
//           alt=""
//           className="w-8 md:w-14 animate-spin [animation-duration:6s]"
//         />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
//         {projects.map((p) => (
//           <AOSWrapper key={p.id} animation="slide-up">
//             <a
//               href={p.href}
//               className={`group block overflow-hidden rounded-md border border-white/10 bg-[#111] ${
//                 p.offset ? "md:mt-20" : ""
//               }`}
//             >
//               <img
//                 src={p.image}
//                 alt={p.title}
//                 loading="lazy"
//                 className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
//               />
//             </a>
//           </AOSWrapper>
//         ))}
//       </div>

//       <div className="flex justify-center">
//         <button className="circle-btn">
//           <span className="fill"></span>
//           <span className="text">All Projects</span>
//         </button>
//       </div>
//     </div>
//   </section>
// );

// export default PortfolioSection;

import React, { useCallback, useState } from "react";

import AOSWrapper from "../../common/AOSWrapper";
import { projects, startImg } from "../../data/homeData";
import ProjectModal from "../projectPages/ProjectModal";
import { Link } from "react-router-dom";

/**
 * Portfolio section with scrolling previews and a full-screen modal.
 */
const PortfolioSection = () => {
  const [active, setActive] = useState(null);

  const close = useCallback(() => {
    setActive(null);
  }, []);

  const openProject = useCallback((project) => {
    setActive(project);
  }, []);

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto flex flex-col gap-12 px-5 md:px-10 lg:px-20">
        {/* Portfolio heading */}
        <div className="flex items-center justify-center gap-4">
          <AOSWrapper animation="slide-up">
            <h2 className="text-5xl font-primary font-bold uppercase text-white md:text-8xl">
              Portfolio
            </h2>
          </AOSWrapper>

          <img
            src={startImg}
            alt=""
            aria-hidden="true"
            className="w-8 animate-spin md:w-14 [animation-duration:6s]"
          />
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project) => (
            <AOSWrapper key={project.id} animation="slide-up">
              <button
                type="button"
                onClick={() => openProject(project)}
                aria-label={`View ${project.title}`}
                className={`group block w-full overflow-hidden rounded-md border border-white/10 bg-[#1a1a1a] text-left transition-colors hover:border-[#c6f10a]/60 ${
                  project.offset ? "md:mt-20" : ""
                }`}
              >
                {/* Browser-style header */}
                <div className="flex items-center gap-2 border-b border-white/10 bg-[#1a1a1a] px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                  <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                  <span className="h-2 w-2 rounded-full bg-[#28c840]" />

                  <span className="ml-3 truncate rounded bg-black/40 px-3 py-0.5 text-[10px] text-gray-400">
                    {project.title}
                  </span>
                </div>

                {/* Scrolling website preview */}
                <ScrollPreview
                  src={project.thumbnail || project.image}
                  alt={project.title}
                />
              </button>
            </AOSWrapper>
          ))}
        </div>

        {/* All Projects button */}
        <div className="flex justify-center">
          <Link type="button" to="/project" className="circle-btn">
            <span className="fill" />
            <span className="text">All Projects</span>
          </Link>
        </div>
      </div>

      {/* Full-screen project modal */}
      {active && <ProjectModal project={active} onClose={close} />}
    </section>
  );
};

/**
 * Fixed-height preview of a full-page website screenshot.
 * Scrolls from top to bottom on hover and keyboard focus.
 */
const ScrollPreview = ({ src, alt }) => {
  const [shift, setShift] = React.useState(0);
  const frameRef = React.useRef(null);
  const imgRef = React.useRef(null);

  const measure = React.useCallback(() => {
    const frame = frameRef.current;
    const img = imgRef.current;

    if (frame && img) {
      setShift(Math.max(0, img.offsetHeight - frame.clientHeight));
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const duration = Math.min(Math.max(shift / 250, 3), 14);

  return (
    <div
      ref={frameRef}
      className="relative h-[360px] overflow-hidden bg-[#111] md:h-[440px]"
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={measure}
        style={{
          "--shift": `-${shift}px`,
          "--dur": `${duration}s`,
        }}
        className="block h-auto w-full will-change-transform transition-transform ease-linear [transition-duration:0.6s] group-hover:[transform:translateY(var(--shift))] group-hover:[transition-duration:var(--dur)] group-focus-visible:[transform:translateY(var(--shift))] group-focus-visible:[transition-duration:var(--dur)]"
      />

      <span className="pointer-events-none absolute bottom-3 right-3 bg-black/70 px-3 py-1 text-[10px] uppercase tracking-wider text-white opacity-0 transition-opacity group-hover:opacity-100">
        Click to view full
      </span>
    </div>
  );
};

export default PortfolioSection;
