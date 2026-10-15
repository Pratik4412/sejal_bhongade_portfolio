import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// Full-screen viewer: the tall image scrolls inside the modal, the page behind stays locked.
const ProjectModal = ({ project, onClose }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[100] flex flex-col bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="flex items-center justify-between gap-4 border-b border-white/10 bg-black px-5 py-3 md:px-10"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="truncate text-sm md:text-base font-primary font-semibold text-white">
          {project.title}
        </h3>
        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c6f10a] px-4 py-2 text-xs font-semibold text-black"
            >
              Visit Live Site
            </a>
          )}
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="grid h-9 w-9 place-items-center border border-white/20 text-white transition-colors hover:bg-white hover:text-black"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto overscroll-contain">
        <div
          className="mx-auto w-full max-w-5xl px-3 py-6 md:py-10"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto bg-white"
          />
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default ProjectModal;
