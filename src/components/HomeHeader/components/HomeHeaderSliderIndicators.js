import React from "react";
import PropTypes from "prop-types";
import cn from "classnames-helper";

// Constants
import { SLIDES } from "../core/data";

function HomeHeaderSliderIndicators({ slideIndex, setSlideIndex }) {
  return (
    <div className="w-melissa-musique c-home-header_slider_indicators">
      {SLIDES.map((item, index) => (
        <button
          key={`${item.id}-slide-indicator`}
          type="button"
          onClick={() => setSlideIndex(index)}
          className={cn("w-melissa-musique c-home-header_slider_indicator", [
            "-active",
            index === slideIndex
          ])}
        />
      ))}
    </div>
  );
}

HomeHeaderSliderIndicators.propTypes = {
  slideIndex: PropTypes.number.isRequired,
  setSlideIndex: PropTypes.func.isRequired
};

export default HomeHeaderSliderIndicators;
