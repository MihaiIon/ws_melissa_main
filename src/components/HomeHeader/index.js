import React, { useState } from "react";
import useInterval from "react-useinterval";
import { animated as a, useTransition } from "react-spring";

// Components
import Slide from "./components/HomeHeaderSlide";
import HomeHeaderSliderIndicators from "./components/HomeHeaderSliderIndicators";

// Constants
import { SLIDER_SPEED } from "../../constants/time";
import { SLIDES } from "./core/data";

function HomeHeader() {
  const [slideIndex, setSlideIndex] = useState(0);

  // Transisions
  const transitions = useTransition(SLIDES[slideIndex], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  // Set timings
  useInterval(index => setSlideIndex((index + 1) % SLIDES.length), SLIDER_SPEED, slideIndex);

  return (
    <header className="w-melissa-musique c-home-header">
      <ul className="w-melissa-musique c-home-header_slider">
        {transitions.map(({ item, key, props }) => (
          <a.li key={key} className="w-melissa-musique c-home-header_slider_item" style={props}>
            <Slide
              cKey={`${item.id}-slide`}
              title={item.title}
              description={item.description}
              imageUrl={item.url}
            />
          </a.li>
        ))}
      </ul>
      <HomeHeaderSliderIndicators slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
    </header>
  );
}

export default HomeHeader;
