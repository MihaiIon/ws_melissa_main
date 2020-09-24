import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";

// Components
import { AnimatedTitle } from "../../../components-anim";

// Constants
import { SPEED } from "../../../constants/time";

function BiographyHeader() {
  const [yOffset, setYOffset] = useState(0);
  const [opacity, setOpacity] = useState(0.6);
  const [isSubTitleVisible, setSubtitleVisibility] = useState(false);

  useEffect(() => {
    // Subtitle
    const t1 = setTimeout(() => void setSubtitleVisibility(!isSubTitleVisible), SPEED * 2);

    // Scroll
    const doc = document.documentElement;
    const fn = () => {
      const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      if (top <= 60) {
        setOpacity(0.6);
        setYOffset(0);
      } else if (top < 1500) {
        setOpacity((0.6 + top / 1500).toFixed(2));
        setYOffset((top - 60) / 3);
      }
    };
    window.addEventListener("scroll", fn);

    return () => {
      clearTimeout(t1);
      window.removeEventListener("scroll", fn);
    };
  }, []);

  function computeTitleHeight() {
    const win = window;
    const doc = window.document.documentElement;
    const { body } = window;
    const width = win.innerWidth || doc.clientWidth || body.clientWidth;

    if (width < 1200) return 45;
    if (width < 1600) return 68;
    if (width < 2000) return 78;
    if (width < 2400) return 88;
    return 100;
  }

  return (
    <header className="w-melissa-musique c-biography_header">
      <div
        className="w-melissa-musique c-biography_header_content"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${opacity})`
        }}
      >
        <div style={{ position: "relative", transform: `translateY(${yOffset}px)` }}>
          <AnimatedTitle
            show
            className="w-melissa-musique c-biography_header"
            title={["Mélissa", "Bissonnette"]}
            titleHeight={computeTitleHeight()}
          />
          <Fade left cascade when={isSubTitleVisible}>
            <p className="w-melissa-musique c-biography_header_description">
              Passionnée par l'enseignement
            </p>
          </Fade>
        </div>
      </div>
    </header>
  );
}

export default BiographyHeader;
