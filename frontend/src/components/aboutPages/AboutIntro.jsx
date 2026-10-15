// import React from "react";
// import AOSWrapper from "../../common/AOSWrapper";
// import { startImg } from "../../data/homeData";
// import { aboutIntro, aboutManImg } from "../../data/aboutData";

// const IconDot = ({ children }) => (
//   <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#c6f10a]/60 text-[#c6f10a]">
//     {children}
//   </span>
// );

// const AboutIntro = () => (
//   <section className="bg-black py-16 md:py-24">
//     <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-5 md:grid-cols-2 md:px-10 lg:px-20">
//       {/* About content */}
//       <div className="flex flex-col gap-6">
//         <h6 className="font-primary text-base text-white">
//           {aboutIntro.heading}
//         </h6>

//         <AOSWrapper animation="slide-up">
//           <h2 className="font-primary text-4xl font-semibold leading-tight text-white md:text-6xl">
//             {aboutIntro.title}
//           </h2>
//         </AOSWrapper>

//         {aboutIntro.text
//           .split(/\n{2,}/)
//           .filter(Boolean)
//           .map((paragraph, index) => (
//             <p
//               key={index}
//               className="max-w-md text-sm leading-7 text-gray-400 md:text-base"
//             >
//               {paragraph}
//             </p>
//           ))}

//         {/* Email and phone */}
//         <div className="flex flex-col gap-5">
//           <div className="flex items-center gap-4">
//             <IconDot>
//               <svg
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 aria-hidden="true"
//               >
//                 <rect x="3" y="5" width="18" height="14" rx="2" />
//                 <path d="M3 7l9 6 9-6" />
//               </svg>
//             </IconDot>

//             <div>
//               <p className="text-xs text-gray-400">Email me</p>
//               <a
//                 href={`mailto:${aboutIntro.email}`}
//                 className="font-primary font-semibold text-white transition-colors hover:text-[#c6f10a]"
//               >
//                 {aboutIntro.email}
//               </a>
//             </div>
//           </div>

//           <div className="flex items-center gap-4">
//             <IconDot>
//               <svg
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 aria-hidden="true"
//               >
//                 <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
//               </svg>
//             </IconDot>

//             <div>
//               <p className="text-xs text-gray-400">Have a call</p>
//               <a
//                 href={`tel:${aboutIntro.phone.replace(/[^\d+]/g, "")}`}
//                 className="font-primary font-semibold text-white transition-colors hover:text-[#c6f10a]"
//               >
//                 {aboutIntro.phone}
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Designer image */}
//       <div className="relative flex justify-center md:justify-end">
//         <img
//           src={aboutManImg}
//           alt="Sejal Bhongade working on UI/UX design"
//           loading="lazy"
//           decoding="async"
//           className="h-auto w-full max-w-sm rounded-2xl object-cover md:max-w-md"
//         />

//         <img
//           src={startImg}
//           alt=""
//           aria-hidden="true"
//           className="absolute bottom-2 right-0 w-12 md:w-16"
//         />
//       </div>
//     </div>
//   </section>
// );

// export default AboutIntro;

import React from "react";
import AOSWrapper from "../../common/AOSWrapper";
import { startImg } from "../../data/homeData";
import { aboutIntro, aboutManImg } from "../../data/aboutData";
import aboutVideo from "../../assets/portfolio.mp4";
// Icon shown in a lime ring next to each contact detail
const IconDot = ({ children }) => (
  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#c6f10a]/60 text-[#c6f10a]">
    {children}
  </span>
);

const iconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  "aria-hidden": true,
};

// "+91 93077 39538" -> "tel:+919307739538"
const toTelHref = (phone) => `tel:${phone.replace(/[^\d+]/g, "")}`;

const ContactRow = ({ icon, label, href, children }) => (
  <div className="flex items-center gap-4">
    <IconDot>{icon}</IconDot>
    <div>
      <p className="text-xs text-gray-400">{label}</p>
      <a
        href={href}
        className="font-primary font-semibold text-white transition-colors hover:text-[#c6f10a] focus-visible:text-[#c6f10a] focus-visible:outline-none"
      >
        {children}
      </a>
    </div>
  </div>
);

const AboutIntro = () => {
  // A blank line in the data starts a new paragraph.
  const paragraphs = aboutIntro.text.split(/\n{2,}/).filter(Boolean);

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-5 md:grid-cols-2 md:px-10 lg:px-20">
        <div className="flex flex-col gap-6">
          <h6 className="font-primary text-base text-white">
            {aboutIntro.label}
          </h6>

          <AOSWrapper animation="slide-up">
            <h2 className="font-primary text-4xl font-semibold leading-tight text-white md:text-6xl">
              {aboutIntro.title}
            </h2>
          </AOSWrapper>

          <div className="flex max-w-xl flex-col gap-4">
            {paragraphs.map((text) => (
              <p
                key={text.slice(0, 40)}
                className="text-sm leading-7 text-gray-400 md:text-base"
              >
                {text}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-5">
            <ContactRow
              label="Email me"
              href={`mailto:${aboutIntro.email}`}
              icon={
                <svg {...iconProps}>
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              }
            >
              {aboutIntro.email}
            </ContactRow>

            <ContactRow
              label="Have a call"
              href={toTelHref(aboutIntro.phone)}
              icon={
                <svg {...iconProps}>
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
                </svg>
              }
            >
              {aboutIntro.phone}
            </ContactRow>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <video
            src={aboutVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="h-auto w-full max-w-sm rounded-2xl object-cover md:max-w-md"
            aria-label="About section video"
          />

          <img
            src={startImg}
            alt=""
            aria-hidden="true"
            className="absolute bottom-2 right-0 w-12 md:w-16"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
