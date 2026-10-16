// // import React from "react";
// // import AOSWrapper from "../../common/AOSWrapper";
// // import { designPrinciples } from "../../data/aboutData";

// // // "1" -> "01"
// // const pad = (n) => String(n).padStart(2, "0");

// // const Item = ({ principle, index }) => (
// //   <article className="flex flex-col gap-3 border-b border-white/10 py-7 last:border-0">
// //     {/* Outlined number, like the year labels used elsewhere */}
// //     <span
// //       className="font-primary text-4xl font-bold leading-none text-transparent"
// //       style={{ WebkitTextStroke: "1px #c6f10a" }}
// //       aria-hidden="true"
// //     >
// //       {pad(index + 1)}
// //     </span>
// //     <h3 className="font-primary text-xl font-semibold text-white md:text-2xl">
// //       {principle.title}
// //     </h3>
// //     <p className="text-sm leading-7 text-gray-400 md:text-base">
// //       {principle.text}
// //     </p>
// //   </article>
// // );

// // /**
// //  * Vertical auto-scrolling list of design principles.
// //  * - Needs the `animate-marquee-y` keyframes (see tailwind-marquee-snippet.md).
// //  * - Pauses on hover; with "reduce motion" enabled it becomes a normal scrollable list.
// //  * - The second copy of the list (needed for the seamless loop) is hidden from screen readers.
// //  */
// // const PrinciplesScroller = () => (
// //   <section
// //     className="bg-[#0b0b0b] py-16 md:py-24"
// //     aria-labelledby="principles-title"
// //   >
// //     <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-5 md:grid-cols-2 md:px-10 lg:px-20">
// //       <div className="flex flex-col gap-4">
// //         <h6 className="font-primary text-base text-white">My Principles</h6>
// //         <AOSWrapper animation="slide-up">
// //           <h2
// //             id="principles-title"
// //             className="font-primary text-4xl font-semibold leading-tight text-white md:text-6xl"
// //           >
// //             What guides <br /> my work
// //           </h2>
// //         </AOSWrapper>
// //       </div>

// //       {/* Soft fade at the top and bottom edges */}
// //       <div
// //         className="relative h-[460px] overflow-hidden motion-reduce:overflow-y-auto"
// //         style={{
// //           maskImage:
// //             "linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)",
// //           WebkitMaskImage:
// //             "linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)",
// //         }}
// //       >
// //         <div className="animate-marquee-y hover:[animation-play-state:paused] motion-reduce:animate-none">
// //           {designPrinciples.map((p, i) => (
// //             <Item key={p.id} principle={p} index={i} />
// //           ))}

// //           {/* duplicate for the seamless loop */}
// //           <div aria-hidden="true" className="motion-reduce:hidden">
// //             {designPrinciples.map((p, i) => (
// //               <Item key={`copy-${p.id}`} principle={p} index={i} />
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   </section>
// // );

// // export default PrinciplesScroller;

// import React from "react";
// import AOSWrapper from "../../common/AOSWrapper";
// import { designPrinciples } from "../../data/aboutData";

// // "1" -> "01"
// const pad = (n) => String(n).padStart(2, "0");

// /**
//  * Self-contained scroll animation: no Tailwind config needed.
//  * - Seamless loop: the list is rendered twice and the track moves up by exactly half.
//  * - Pauses on hover; respects "reduce motion" (then the window is a normal scrollable list).
//  */
// const SCROLL_CSS = `
// @keyframes principles-scroll { from { transform: translateY(0); } to { transform: translateY(-50%); } }
// .principles-track { animation: principles-scroll 45s linear infinite; }
// .principles-window:hover .principles-track { animation-play-state: paused; }
// @media (prefers-reduced-motion: reduce) {
//   .principles-track { animation: none; }
//   .principles-window { overflow-y: auto; }
//   .principles-copy { display: none; }
// }
// `;

// const Item = ({ principle, index }) => (
//   <article className="flex flex-col gap-3 border-b border-white/10 py-7">
//     {/* Outlined number */}
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

// const List = ({ copy = false }) => (
//   <div
//     className={copy ? "principles-copy" : undefined}
//     aria-hidden={copy || undefined}
//   >
//     {designPrinciples.map((p, i) => (
//       <Item key={p.id} principle={p} index={i} />
//     ))}
//   </div>
// );

// /**
//  * About page: heading on the left, principles auto-scrolling on the right.
//  * `autoScroll={false}` shows all principles at once as a plain list (no window, no motion).
//  */
// const PrinciplesScroller = ({ autoScroll = true }) => (
//   <section
//     className="bg-[#0b0b0b] py-16 md:py-24"
//     aria-labelledby="principles-title"
//   >
//     <style>{SCROLL_CSS}</style>

//     <div className="container mx-auto grid grid-cols-1 gap-10 px-5 md:grid-cols-2 md:px-10 lg:px-20">
//       <div className="flex flex-col gap-4 md:sticky md:top-24 md:self-start">
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

//       {autoScroll ? (
//         // Taller window (about 3 principles visible) with a soft fade at the top and bottom
//         <div
//           className="principles-window relative h-[540px] overflow-hidden md:h-[680px]"
//           style={{
//             maskImage:
//               "linear-gradient(to bottom, transparent, #000 8%, #000 92%, transparent)",
//             WebkitMaskImage:
//               "linear-gradient(to bottom, transparent, #000 8%, #000 92%, transparent)",
//           }}
//         >
//           <div className="principles-track">
//             <List />
//             <List copy />
//           </div>
//         </div>
//       ) : (
//         <List />
//       )}
//     </div>
//   </section>
// );

// export default PrinciplesScroller;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOSWrapper from "../../common/AOSWrapper";
import { designPrinciples } from "../../data/aboutData";

gsap.registerPlugin(ScrollTrigger);

// "1" -> "01"
const pad = (n) => String(n).padStart(2, "0");

// Each card sticks a little lower than the one before, so the edges of earlier cards stay visible.
const STACK_TOP = "calc(6rem + var(--i) * 1rem)";

/**
 * About page: "What guides my work" as stacking cards.
 *
 * - Cards are position: sticky (pure CSS), so the layout is correct even if JS animation is off.
 * - GSAP ScrollTrigger adds the polish: as the next card slides over a card, that card scales
 *   down and dims; a counter and progress line follow the scroll.
 * - Animations only run when the user has NOT asked for reduced motion.
 *
 * Install once:  npm i gsap
 */
const PrinciplesStack = () => {
  const sectionRef = useRef(null);
  const countRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const cards = gsap.utils.toArray(".principle-card", section);
    const stack = section.querySelector(".principle-stack");
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Where a card sticks, read from CSS so it stays correct at every breakpoint
      const stickTop = (card) => parseFloat(getComputedStyle(card).top) || 0;

      // 1) Card i shrinks and dims while card i+1 slides over it
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (!next) return;

        gsap.to(card, {
          scale: 0.93,
          filter: "brightness(0.55)",
          transformOrigin: "center top",
          ease: "none",
          scrollTrigger: {
            trigger: next,
            // overlap starts when the next card's top reaches this card's bottom...
            start: () => `top ${stickTop(card) + card.offsetHeight}px`,
            // ...and ends when it has settled at its own sticky position
            end: () => `top ${stickTop(next)}px`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      });

      // 2) Counter "01 / 06": switches as each card becomes the top card
      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: () => `top ${stickTop(card) + 40}px`,
          end: "bottom top",
          onToggle: (self) => {
            if (self.isActive && countRef.current)
              countRef.current.textContent = pad(i + 1);
          },
          invalidateOnRefresh: true,
        });
      });

      // 3) Progress line fills while the stack is on screen
      gsap.fromTo(
        barRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: stack,
            start: "top 60%",
            end: "bottom bottom",
            scrub: true,
          },
        },
      );

      // Fonts can change heights after first paint: recalculate once they are ready
      document.fonts?.ready.then(() => ScrollTrigger.refresh());
    });

    return () => mm.revert(); // kills every tween and ScrollTrigger created above
  }, []);

  const total = designPrinciples.length;

  return (
    <section
      ref={sectionRef}
      className="bg-[#0b0b0b] py-16 md:py-24"
      aria-labelledby="principles-title"
    >
      <div className="container mx-auto grid grid-cols-1 gap-10 px-5 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16 md:px-10 lg:px-20">
        {/* Left: heading + live counter (stays in view on desktop) */}
        <div className="md:sticky md:top-24 md:self-start">
          <h6 className="font-primary text-base text-white">My Principles</h6>

          <AOSWrapper animation="slide-up">
            <h2
              id="principles-title"
              className="mt-4 font-primary text-4xl font-semibold leading-tight text-white md:text-6xl"
            >
              What guides <br /> my work
            </h2>
          </AOSWrapper>

          <div className="mt-10 hidden md:block" aria-hidden="true">
            <p className="font-primary text-6xl font-bold leading-none text-white">
              <span ref={countRef} className="text-[#c6f10a]">
                01
              </span>
              <span className="ml-2 text-2xl font-medium text-white/40">
                / {pad(total)}
              </span>
            </p>
            <div className="mt-5 h-[2px] w-48 bg-white/10">
              <div
                ref={barRef}
                className="h-full w-full origin-left bg-[#c6f10a]"
              />
            </div>
          </div>
        </div>

        {/* Right: the card stack */}
        <ol className="principle-stack flex flex-col gap-6 pb-10 md:gap-8">
          {designPrinciples.map((p, i) => (
            <li
              key={p.id}
              className="principle-card sticky will-change-transform"
              style={{ "--i": i, top: STACK_TOP }}
            >
              <article className="flex min-h-[260px] flex-col justify-between gap-8 rounded-2xl border border-white/10 bg-[#121212] p-6 shadow-[0_-24px_60px_rgba(0,0,0,0.55)] md:min-h-[300px] md:p-10">
                <div className="flex items-start justify-between gap-4">
                  <span
                    className="font-primary text-6xl font-bold leading-none text-transparent md:text-7xl"
                    style={{ WebkitTextStroke: "1px #c6f10a" }}
                    aria-hidden="true"
                  >
                    {pad(i + 1)}
                  </span>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-wider text-white/60">
                    Principle
                  </span>
                </div>

                <div>
                  <h3 className="font-primary text-2xl font-semibold text-white md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-gray-400 md:text-base">
                    {p.text}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default PrinciplesStack;
