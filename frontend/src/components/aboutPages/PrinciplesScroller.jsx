// import React from "react";
// import AOSWrapper from "../../common/AOSWrapper";
// import { designPrinciples } from "../../data/aboutData";

// // "1" -> "01"
// const pad = (n) => String(n).padStart(2, "0");

// const Item = ({ principle, index }) => (
//   <article className="flex flex-col gap-3 border-b border-white/10 py-7 last:border-0">
//     {/* Outlined number, like the year labels used elsewhere */}
//     <span
//       className="font-primary text-4xl font-bold leading-none text-transparent"
//       style={{ WebkitTextStroke: "1px #c6f10a" }}
//       aria-hidden="true"
//     >
//       {pad(index + 1)}
//     </span>
//     <h3 className="font-primary text-xl font-semibold text-white md:text-2xl">
//       {principle.title}
//     </h3>
//     <p className="text-sm leading-7 text-gray-400 md:text-base">
//       {principle.text}
//     </p>
//   </article>
// );

// /**
//  * Vertical auto-scrolling list of design principles.
//  * - Needs the `animate-marquee-y` keyframes (see tailwind-marquee-snippet.md).
//  * - Pauses on hover; with "reduce motion" enabled it becomes a normal scrollable list.
//  * - The second copy of the list (needed for the seamless loop) is hidden from screen readers.
//  */
// const PrinciplesScroller = () => (
//   <section
//     className="bg-[#0b0b0b] py-16 md:py-24"
//     aria-labelledby="principles-title"
//   >
//     <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-5 md:grid-cols-2 md:px-10 lg:px-20">
//       <div className="flex flex-col gap-4">
//         <h6 className="font-primary text-base text-white">My Principles</h6>
//         <AOSWrapper animation="slide-up">
//           <h2
//             id="principles-title"
//             className="font-primary text-4xl font-semibold leading-tight text-white md:text-6xl"
//           >
//             What guides <br /> my work
//           </h2>
//         </AOSWrapper>
//       </div>

//       {/* Soft fade at the top and bottom edges */}
//       <div
//         className="relative h-[460px] overflow-hidden motion-reduce:overflow-y-auto"
//         style={{
//           maskImage:
//             "linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)",
//           WebkitMaskImage:
//             "linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)",
//         }}
//       >
//         <div className="animate-marquee-y hover:[animation-play-state:paused] motion-reduce:animate-none">
//           {designPrinciples.map((p, i) => (
//             <Item key={p.id} principle={p} index={i} />
//           ))}

//           {/* duplicate for the seamless loop */}
//           <div aria-hidden="true" className="motion-reduce:hidden">
//             {designPrinciples.map((p, i) => (
//               <Item key={`copy-${p.id}`} principle={p} index={i} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default PrinciplesScroller;

import React from "react";
import AOSWrapper from "../../common/AOSWrapper";
import { designPrinciples } from "../../data/aboutData";

// "1" -> "01"
const pad = (n) => String(n).padStart(2, "0");

/**
 * Self-contained scroll animation: no Tailwind config needed.
 * - Seamless loop: the list is rendered twice and the track moves up by exactly half.
 * - Pauses on hover; respects "reduce motion" (then the window is a normal scrollable list).
 */
const SCROLL_CSS = `
@keyframes principles-scroll { from { transform: translateY(0); } to { transform: translateY(-50%); } }
.principles-track { animation: principles-scroll 45s linear infinite; }
.principles-window:hover .principles-track { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) {
  .principles-track { animation: none; }
  .principles-window { overflow-y: auto; }
  .principles-copy { display: none; }
}
`;

const Item = ({ principle, index }) => (
  <article className="flex flex-col gap-3 border-b border-white/10 py-7">
    {/* Outlined number */}
    <span
      className="font-primary text-4xl font-bold leading-none text-transparent"
      style={{ WebkitTextStroke: "1px #c6f10a" }}
      aria-hidden="true"
    >
      {pad(index + 1)}
    </span>
    <h3 className="font-primary text-xl font-semibold text-white md:text-2xl">
      {principle.title}
    </h3>
    <p className="text-sm leading-7 text-gray-400 md:text-base">
      {principle.text}
    </p>
  </article>
);

const List = ({ copy = false }) => (
  <div
    className={copy ? "principles-copy" : undefined}
    aria-hidden={copy || undefined}
  >
    {designPrinciples.map((p, i) => (
      <Item key={p.id} principle={p} index={i} />
    ))}
  </div>
);

/**
 * About page: heading on the left, principles auto-scrolling on the right.
 * `autoScroll={false}` shows all principles at once as a plain list (no window, no motion).
 */
const PrinciplesScroller = ({ autoScroll = true }) => (
  <section
    className="bg-[#0b0b0b] py-16 md:py-24"
    aria-labelledby="principles-title"
  >
    <style>{SCROLL_CSS}</style>

    <div className="container mx-auto grid grid-cols-1 gap-10 px-5 md:grid-cols-2 md:px-10 lg:px-20">
      <div className="flex flex-col gap-4 md:sticky md:top-24 md:self-start">
        <h6 className="font-primary text-base text-white">My Principles</h6>
        <AOSWrapper animation="slide-up">
          <h2
            id="principles-title"
            className="font-primary text-4xl font-semibold leading-tight text-white md:text-6xl"
          >
            What guides <br /> my work
          </h2>
        </AOSWrapper>
      </div>

      {autoScroll ? (
        // Taller window (about 3 principles visible) with a soft fade at the top and bottom
        <div
          className="principles-window relative h-[540px] overflow-hidden md:h-[680px]"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, #000 8%, #000 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, #000 8%, #000 92%, transparent)",
          }}
        >
          <div className="principles-track">
            <List />
            <List copy />
          </div>
        </div>
      ) : (
        <List />
      )}
    </div>
  </section>
);

export default PrinciplesScroller;
