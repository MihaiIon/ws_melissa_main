import React from "react";

// Components
import { AnimatedMusicNote } from "../components-anim";

function Footer() {
  return (
    <footer className="w-melissa-musique c-footer">
      <AnimatedMusicNote />
      <p className="w-melissa-musique c-footer_copyright">
        Mélissa Bissonnette © 2019 | melissa@melmusique.com
      </p>
    </footer>
  );
}

export default Footer;
