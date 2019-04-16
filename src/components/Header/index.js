import React, { useState, useEffect } from "react";
import { animated as a, useTransition } from "react-spring";

// Components
import Navigation from "../Navigation";
import Slide from "./components/HeaderSlide";
import HeaderSliderIndicators from "./components/HeaderSliderIndicators";

// Constants
import { SLIDER_SPEED } from "../../constants/time";
import { SLIDES } from "./core/data";

function Header() {
  const [slideIndex, setSlideIndex] = useState(0);

  // Transisions
  const transitions = useTransition(SLIDES[slideIndex], item => item.description, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  // Set timings
  useEffect(() => {
    void setInterval(() => setSlideIndex(index => (index + 1) % SLIDES.length), SLIDER_SPEED);
  }, []);

  return (
    <header className="w-melissa-musique c-header">
      <Navigation />
      <ul className="w-melissa-musique c-header_slider">
        {transitions.map(({ item, key, props }) => (
          <a.li key={key} className="w-melissa-musique c-header_slider_item" style={props}>
            <Slide title={item.title} description={item.description} imageUrl={item.url} />
          </a.li>
        ))}
      </ul>
      <HeaderSliderIndicators slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
    </header>
  );
}

export default Header;
