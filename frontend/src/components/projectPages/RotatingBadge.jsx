import React from "react";

// Circular "DIGITAL · AGENCY" badge with a slowly rotating text ring.
// If you already have a badge image asset, replace this component with an <img>.
const RotatingBadge = ({ className = "" }) => (
  <div
    className={`relative h-24 w-24 md:h-28 md:w-28 ${className}`}
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 120 120"
      className="absolute inset-0 animate-spin [animation-duration:14s]"
    >
      <defs>
        <path
          id="badge-circle"
          d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
        />
      </defs>
      <circle
        cx="60"
        cy="60"
        r="58"
        fill="#0b0b0b"
        stroke="rgba(255,255,255,0.15)"
      />
      <text fill="#fff" fontSize="10" letterSpacing="3" fontFamily="inherit">
        <textPath href="#badge-circle">
          DIGITAL • AGENCY • DIGITAL • AGENCY •
        </textPath>
      </text>
    </svg>
    <span className="absolute inset-0 grid place-items-center">
      <span className="grid h-9 w-9 place-items-center rounded-md bg-[#c6f10a] text-black">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path
            d="M7 17L17 7M9 7h8v8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </span>
  </div>
);

export default RotatingBadge;
