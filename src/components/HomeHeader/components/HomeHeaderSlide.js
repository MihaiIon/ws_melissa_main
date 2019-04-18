import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Components
import { AnimatedTitle, AnimatedDescription } from "../../../components-anim";

// Constants
import {
  ANIMATED_DESCRIPTION_DELAY,
  SLIDE_SHOW_DELAY,
  SLIDE_HIDE_DELAY
} from "../../../constants/time";

function HomeHeaderSlide({ cKey, title, description, imageUrl }) {
  // Description
  const [isTitleVisible, setTitleVisibility] = useState(false);
  const [isDescriptionVisible, setDescriptionVisibility] = useState(false);

  //
  useEffect(() => {
    const t1 = setTimeout(() => {
      setTitleVisibility(true);
    }, SLIDE_SHOW_DELAY);
    const t2 = setTimeout(() => {
      setDescriptionVisibility(true);
    }, SLIDE_SHOW_DELAY + ANIMATED_DESCRIPTION_DELAY);
    const t3 = setTimeout(() => {
      setTitleVisibility(false);
      setDescriptionVisibility(false);
    }, SLIDE_HIDE_DELAY);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div
      key={cKey}
      className="w-melissa-musique c-home-header_slide"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      <div className="w-melissa-musique c-home-header_slide_content o-wrapper">
        <AnimatedTitle
          show={isTitleVisible}
          title={title}
          titleHeight={55}
          className="w-melissa-musique c-home-header_slide"
        />
        <AnimatedDescription
          show={isDescriptionVisible}
          className="w-melissa-musique c-home-header_slide"
          content={description}
        />
      </div>
    </div>
  );
}

HomeHeaderSlide.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  cKey: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  title: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default HomeHeaderSlide;
