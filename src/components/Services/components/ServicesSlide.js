import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { ANIMATED_DESCRIPTION_DELAY } from "../../../constants/time";

// Components
import { AnimatedTitle, AnimatedDescription } from "../../../components-anim";

function ServicesSlide({ id, show, title, description, imageUrl }) {
  const [isDescriptionVisible, setDescriptionVisibility] = useState(false);
  useEffect(() => {
    if (!isDescriptionVisible && show) {
      setTimeout(() => void setDescriptionVisibility(true), ANIMATED_DESCRIPTION_DELAY * 0.6);
    } else if (isDescriptionVisible && !show) setDescriptionVisibility(false);
  });
  return (
    <div
      key={id}
      className="w-melissa-musique c-services_slide-wrapper"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      <div className="w-melissa-musique c-services_slide">
        {show && (
          <div className="w-melissa-musique c-services_slide_content">
            <AnimatedTitle
              show={show}
              className="w-melissa-musique c-services_slide"
              title={title}
              titleHeight={38}
            />
            <AnimatedDescription
              show={isDescriptionVisible}
              className="w-melissa-musique c-services_slide"
              content={description}
            />
          </div>
        )}
      </div>
    </div>
  );
}

ServicesSlide.propTypes = {
  show: PropTypes.bool.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  title: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default ServicesSlide;
