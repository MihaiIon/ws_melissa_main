import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Components
import { AnimatedTitle, AnimatedDescription } from "../../../components-ui";

// Constants
import {
  ANIMATED_DESCRIPTION_DELAY,
  SLIDE_SHOW_DELAY,
  SLIDE_HIDE_DELAY
} from "../../../constants/time";

function HeaderSlide({ title, description, imageUrl }) {
  // Description
  const [isTitleVisible, setTitleVisibility] = useState(false);
  const [isDescriptionVisible, setDescriptionVisibility] = useState(false);

  //
  useEffect(() => {
    void setTimeout(() => {
      setTitleVisibility(true);
    }, SLIDE_SHOW_DELAY);
    void setTimeout(() => {
      setDescriptionVisibility(true);
    }, SLIDE_SHOW_DELAY + ANIMATED_DESCRIPTION_DELAY);
    void setTimeout(() => {
      setTitleVisibility(false);
      setDescriptionVisibility(false);
    }, SLIDE_HIDE_DELAY);
  }, []);

  return (
    <div
      className="w-melissa-musique c-header_slide"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      <div className="w-melissa-musique c-header_slide_content o-wrapper">
        <AnimatedTitle
          show={isTitleVisible}
          title={title}
          titleHeight={55}
          className="w-melissa-musique c-header_slide"
        />
        <AnimatedDescription
          show={isDescriptionVisible}
          className="w-melissa-musique c-header_slide"
          content={description}
        />
      </div>
    </div>
  );
}

HeaderSlide.propTypes = {
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  title: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default HeaderSlide;
