import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { ANIMATED_DESCRIPTION_DELAY } from "../../../../constants/time";

// Components
import { AnimatedTitle, AnimatedDescription } from "../../../../components-anim";

function ServicesTeaseSlide({ id, show, title, description, imageUrl }) {
  const [isDescriptionVisible, setDescriptionVisibility] = useState(false);

  useEffect(() => {
    if (!isDescriptionVisible && show) {
      setTimeout(() => void setDescriptionVisibility(true), ANIMATED_DESCRIPTION_DELAY * 0.6);
    } else if (isDescriptionVisible && !show) setDescriptionVisibility(false);
  });

  function computeTitleHeight() {
    const win = window;
    const doc = window.document.documentElement;
    const { body } = window;
    const width = win.innerWidth || doc.clientWidth || body.clientWidth;

    if (width < 1599) return 38;
    if (width < 2000) return 42;
    if (width < 2400) return 48;
    return 56;
  }

  return (
    <div
      key={id}
      className="w-melissa-musique c-services-tease_slide-wrapper"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      <div className="w-melissa-musique c-services-tease_slide">
        {show && (
          <div className="w-melissa-musique c-services-tease_slide_content">
            <AnimatedTitle
              show={show}
              className="w-melissa-musique c-services-tease_slide"
              title={title}
              titleHeight={computeTitleHeight()}
            />
            <AnimatedDescription
              show={isDescriptionVisible}
              className="w-melissa-musique c-services-tease_slide"
              content={description}
            />
          </div>
        )}
      </div>
    </div>
  );
}

ServicesTeaseSlide.propTypes = {
  show: PropTypes.bool.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  title: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default ServicesTeaseSlide;
