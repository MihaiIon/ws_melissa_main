import React from "react";
import PropTypes from "prop-types";
import { animated as a, useSpring } from "react-spring";

// Spring configuration
const config = { mass: 5, tension: 2000, friction: 300 };

function AnimatedDescription({ show, className, content }) {
  const props = useSpring({ opacity: show ? 1 : 0, config });
  return (
    <a.p key={content} className={`${className}_description`} style={props}>
      {content}
    </a.p>
  );
}

AnimatedDescription.propTypes = {
  show: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired
};

export default AnimatedDescription;
