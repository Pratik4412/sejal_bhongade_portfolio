// import React from "react";
// import heroCercle from "../../assets/home-images/hero-cercle.webp";
// import AOSWrapper from "../../common/AOSWrapper";
// import RotatingBadge from "../projectPages/RotatingBadge";

// export const DEFAULT_CONTENT = {
//   role: "UI/UX Designer",
//   firstName: "Sejal",
//   lastName: "Bhongade",
// };

// const NAME_CLASS =
//   "font-primary text-5xl font-bold uppercase text-white md:text-9xl";

// const AboutHero = ({ content = {} }) => {
//   const c = {
//     ...DEFAULT_CONTENT,
//     ...content,
//   };

//   return (
//     <section className="first-bg" aria-labelledby="about-hero-title">
//       <div className="container relative mx-auto px-5 pt-10 md:px-10 lg:px-20">
//         <RotatingBadge className="absolute right-5 top-0 md:right-10 md:top-0 lg:right-20" />

//         <div className="flex flex-col gap-5 pb-10 md:pb-14">
//           <h1 id="about-hero-title" className="sr-only">
//             {c.firstName} {c.lastName}
//           </h1>

//           {/* Role */}
//           <div className="flex items-center gap-3">
//             <p className="font-primary text-base text-white">{c.role}</p>
//             <div className="h-[1px] w-20 bg-text-muted" aria-hidden="true" />
//           </div>

//           {/* Large decorative name */}
//           <div aria-hidden="true" className="flex flex-col gap-5">
//             <AOSWrapper animation="slide-up">
//               <div className={NAME_CLASS}>{c.firstName}</div>
//             </AOSWrapper>

//             <div className="flex flex-col-reverse gap-6 md:flex-row md:items-center">
//               <img
//                 src={heroCercle}
//                 alt=""
//                 decoding="async"
//                 className="w-40 md:w-fit"
//               />

//               <AOSWrapper animation="slide-up">
//                 <div className={NAME_CLASS}>{c.lastName}</div>
//               </AOSWrapper>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutHero;

import React from "react";
import heroCercle from "../../assets/home-images/hero-cercle.webp";
import AOSWrapper from "../../common/AOSWrapper";
import RotatingBadge from "../projectPages/RotatingBadge";

/**
 * About page hero: role label + large split name only.
 * The "About Me" intro, contact details and photo live in <AboutIntro /> (data: aboutData.js).
 * Pass a `content` prop to override any field, e.g. from the CMS API.
 */
export const DEFAULT_CONTENT = {
  role: "UI/UX & Graphic Designer",
  firstName: "Sejal",
  lastName: "Bhongade",
};

// Large decorative name lines (the real, accessible <h1> is rendered once below).
const NAME_CLASS =
  "font-primary text-5xl font-bold uppercase text-white md:text-9xl";

const AboutHero = ({ content = {} }) => {
  const c = { ...DEFAULT_CONTENT, ...content };

  return (
    <section className="first-bg">
      <div
        className="second-bg container mx-auto flex flex-col gap-8 justify-center"
        aria-labelledby="about-hero-title"
      >
        <div className="container relative mx-auto px-5 pb-10 pt-10 md:px-10 md:pb-14 lg:px-20">
          <RotatingBadge className="absolute right-5 md:right-10 md:top-0 lg:right-0" />

          <div className="flex flex-col gap-5">
            {/* One real <h1> for SEO and screen readers; the big split-name display below is decorative */}
            <h1 id="about-hero-title" className="sr-only">
              {c.firstName} {c.lastName}, {c.role}
            </h1>

            {/* Role */}
            <div className="flex items-center gap-3">
              <p className="font-primary text-base text-white">{c.role}</p>
              <div className="h-[1px] w-20 bg-text-muted" aria-hidden="true" />
            </div>

            {/* Large name display */}
            <div aria-hidden="true" className="flex flex-col gap-5">
              <AOSWrapper animation="slide-up">
                <div className={NAME_CLASS}>{c.firstName}</div>
              </AOSWrapper>

              <div className="flex flex-col-reverse gap-6 md:flex-row md:items-center">
                <img
                  src={heroCercle}
                  alt=""
                  decoding="async"
                  className="w-40 md:w-fit"
                />
                <AOSWrapper animation="slide-up">
                  <div className={NAME_CLASS}>{c.lastName}</div>
                </AOSWrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
