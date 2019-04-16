import React from "react";
import PropTypes from "prop-types";
import cn from "classnames-helper";

// Constants
import { SLIDES } from "../core/data";

function HeaderSliderIndicators({ slideIndex, setSlideIndex }) {
  return (
    <div className="w-melissa-musique c-header_slider_indicators">
      {SLIDES.map((_, index) => (
        <button
          type="button"
          onClick={() => setSlideIndex(index)}
          className={cn("w-melissa-musique c-header_slider_indicator", [
            "-active",
            index === slideIndex
          ])}
        />
      ))}
    </div>
  );
}

HeaderSliderIndicators.propTypes = {
  slideIndex: PropTypes.number.isRequired,
  setSlideIndex: PropTypes.func.isRequired
};

export default HeaderSliderIndicators;
