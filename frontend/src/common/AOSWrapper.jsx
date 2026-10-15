import React from "react";

const AOSWrapper = ({
  children,
  animation = "fade-up",
  duration = 1000,
  delay = 0,
  once = false,
}) => {
  return (
    <div
      data-aos={animation}
      data-aos-duration={duration}
      data-aos-delay={delay}
      data-aos-once={once}
    >
      {children}
    </div>
  );
};

export default AOSWrapper;
// animation types :-
// fade-up
// fade-down
// fade-left
// fade-right
// zoom-in
// zoom-out
// flip-left
// flip-right
// slide-up
// slide-down
