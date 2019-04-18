import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";

// Components
import { AnimatedTitle } from "../../../components-anim";

// Constants
import { SPEED } from "../../../constants/time";

function BiographyHeader() {
  const [show, set] = useState(false);
  useEffect(() => setTimeout(() => void set(!show), SPEED * 2), []);
  return (
    <header className="w-melissa-musique c-biography_header">
      <div className="w-melissa-musique c-biography_header_content">
        <div>
          <AnimatedTitle
            show
            className="w-melissa-musique c-biography_header"
            title={["Mélissa", "Bissonnette"]}
            titleHeight={65}
          />
          <Fade left cascade when={show}>
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
