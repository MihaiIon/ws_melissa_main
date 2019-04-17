import React, { useState, useEffect } from "react";
import { animated as a, useTransition } from "react-spring";

// Components
import Navigation from "../Navigation";
import Slide from "./components/HomeHeaderSlide";
import HomeHeaderSliderIndicators from "./components/HomeHeaderSliderIndicators";

// Constants
import { SLIDER_SPEED } from "../../constants/time";
import { SLIDES } from "./core/data";

function HomeHeader() {
  const [slideIndex, setSlideIndex] = useState(0);

  // Transisions
  const transitions = useTransition(SLIDES[slideIndex], item => item.title[0], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  // Set timings
  useEffect(() => {
    void setInterval(() => setSlideIndex(index => (index + 1) % SLIDES.length), SLIDER_SPEED);
  }, []);

  return (
    <header className="w-melissa-musique c-home-header">
      <ul className="w-melissa-musique c-home-header_slider">
        {transitions.map(({ item, key, props }) => (
          <a.li key={key} className="w-melissa-musique c-home-header_slider_item" style={props}>
            <Slide title={item.title} description={item.description} imageUrl={item.url} />
          </a.li>
        ))}
      </ul>
      <HomeHeaderSliderIndicators slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
    </header>
  );
}

export default HomeHeader;
