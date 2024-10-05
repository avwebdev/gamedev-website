"use client";

import React from "react";
import "./glitchAnimation.css";

interface Props {
  text?: string;
  animationDurationMS?: number;
  isActive?: boolean;
  className?: string;
}

const GlitchAnimation: React.FC<Props> = ({
  text = "Glitch Animation Effect",
  animationDurationMS = 0,
  isActive = true,
  className = "",
}) => {
  const [active, setActive] = React.useState(isActive);

  React.useEffect(() => {
    if (animationDurationMS) {
      setTimeout(() => {
        setActive(false);
      }, animationDurationMS);
    }
  }, [animationDurationMS]);

  return (
    // <div className="react-glitch-wrapper">
    <div
      className={`${
        active ? "rect-glitch-text" : "rect-glitch-text-clear-animation"
      } ${className}`}
      data-text={text}
    >
      {text}
    </div>
    // </div>
  );
};

export default GlitchAnimation;
export type { Props as GlitchAnimationProps };
