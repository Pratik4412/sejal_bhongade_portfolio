// import React from "react";
// import AOSWrapper from "../../common/AOSWrapper";
// import { projectColumns } from "../../data/projectsData";

// const ProjectCard = ({ project }) => (
//   <AOSWrapper animation="slide-up">
//     <a
//       href={project.href}
//       className={`group block overflow-hidden ${
//         project.framed
//           ? "border-[6px] border-[#1a1a1a] bg-[#1a1a1a] shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
//           : "bg-white"
//       }`}
//     >
//       <img
//         src={project.image}
//         alt={project.title}
//         loading="lazy"
//         className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
//       />
//     </a>
//   </AOSWrapper>
// );

// const ProjectsGrid = () => (
//   <section className="container mx-auto px-5 md:px-10 lg:px-20 pb-16 md:pb-24">
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
//       <div className="flex flex-col gap-6 md:gap-8">
//         {projectColumns.left.map((p) => (
//           <ProjectCard key={p.id} project={p} />
//         ))}
//       </div>
//       {/* md:mt-12 pushes the right column down for the staggered look */}
//       <div className="flex flex-col gap-6 md:gap-8 md:mt-14">
//         {projectColumns.right.map((p) => (
//           <ProjectCard key={p.id} project={p} />
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default ProjectsGrid;

import React, { useCallback, useEffect, useRef, useState } from "react";
import AOSWrapper from "../../common/AOSWrapper";
import ProjectModal from "./ProjectModal";
import { projectColumns } from "../../data/projectsData";

/**
 * Fixed-height window onto a very tall screenshot.
 * - Shows the top of the page by default (object-top behaviour).
 * - On hover it scrolls to the bottom; speed scales with image height so
 *   long pages don't whip past.
 */
const ScrollPreview = ({ src, alt }) => {
  const frameRef = useRef(null);
  const imgRef = useRef(null);
  const [shift, setShift] = useState(0);

  const measure = useCallback(() => {
    const frame = frameRef.current;
    const img = imgRef.current;
    if (frame && img)
      setShift(Math.max(0, img.offsetHeight - frame.offsetHeight));
  }, []);

  useEffect(() => {
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  // ~1s per 250px of travel, clamped between 3s and 14s
  const duration = Math.min(Math.max(shift / 250, 3), 14);

  return (
    <div
      ref={frameRef}
      className="relative h-[360px] md:h-[440px] overflow-hidden bg-[#111]"
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={measure}
        style={{ "--shift": `-${shift}px`, "--dur": `${duration}s` }}
        className="w-full h-auto block will-change-transform ease-linear [transition-duration:0.6s] group-hover:[transform:translateY(var(--shift))] group-hover:[transition-duration:var(--dur)] group-focus-visible:[transform:translateY(var(--shift))] group-focus-visible:[transition-duration:var(--dur)]"
      />
      {/* hint chip */}
      <span className="pointer-events-none absolute bottom-3 right-3 bg-black/70 px-3 py-1 text-[10px] uppercase tracking-wider text-white opacity-0 transition-opacity group-hover:opacity-100">
        Click to view full
      </span>
    </div>
  );
};

const ProjectCard = ({ project, onOpen }) => (
  <AOSWrapper animation="slide-up">
    <button
      type="button"
      onClick={() => onOpen(project)}
      aria-label={`View ${project.title}`}
      className="group block w-full overflow-hidden border border-white/10 bg-[#1a1a1a] text-left transition-colors hover:border-[#c6f10a]/60"
    >
      {/* browser chrome */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#1a1a1a] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate rounded bg-black/40 px-3 py-0.5 text-[10px] text-gray-400">
          {project.title}
        </span>
      </div>

      <ScrollPreview
        src={project.thumbnail || project.image}
        alt={project.title}
      />
    </button>
  </AOSWrapper>
);

const ProjectsGrid = () => {
  const [active, setActive] = useState(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <section className="container mx-auto px-5 md:px-10 lg:px-20 pb-16 md:pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="flex flex-col gap-6 md:gap-8">
          {projectColumns.left.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setActive} />
          ))}
        </div>
        {/* md:mt-14 pushes the right column down for the staggered look */}
        <div className="flex flex-col gap-6 md:gap-8 md:mt-14">
          {projectColumns.right.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setActive} />
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={close} />}
    </section>
  );
};

export default ProjectsGrid;
