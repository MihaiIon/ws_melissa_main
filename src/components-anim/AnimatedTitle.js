import React from "react";
import PropTypes from "prop-types";
import { animated as a, useTrail } from "react-spring";

// Spring configuration
const config = { mass: 5, tension: 2250, friction: 350 };

function AnimatedTitle({ show, title, titleHeight, xOffset, className }) {
  // Animations
  const trail = useTrail(title.length, {
    config,
    opacity: show ? 1 : 0,
    x: show ? 0 : xOffset,
    height: show ? titleHeight : 0,
    from: { opacity: 0, x: xOffset, height: 0 }
  });

  return (
    <h1 className={`${className}_title`}>
      {trail.map(({ x, ...rest }, index) => (
        <span
          key={`animated-title-${index}`}
          className={`${className}_title_span-wrapper`}
          style={{ height: `${titleHeight}px` }}
        >
          <a.span
            className={`${className}_title_text`}
            style={{ ...rest, transform: x.interpolate(value => `translate3d(0,${value}px,0)`) }}
          >
            {title[index]}
          </a.span>
        </span>
      ))}
    </h1>
  );
}

AnimatedTitle.defaultProps = {
  titleHeight: 80,
  xOffset: 20
};

AnimatedTitle.propTypes = {
  show: PropTypes.bool.isRequired,
  titleHeight: PropTypes.number,
  xOffset: PropTypes.number,
  className: PropTypes.string.isRequired,
  title: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default AnimatedTitle;
