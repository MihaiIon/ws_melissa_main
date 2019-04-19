import React from "react";

// Components
import { Bounce as Effect } from "react-reveal";
// import { AnimatedMusicNote } from "../components-anim";
import Link from "./Link";

function Error() {
  return (
    <div className="w-melissa-musique c-error">
      <Effect big>
        <div>
          <h1 className="w-melissa-musique c-error_title o-h1">Oops!</h1>
          <h2 className="w-melissa-musique c-error_subtitle o-h2">
            Cette page n'est pas disponible
          </h2>
          {/* <AnimatedMusicNote className="c-error_icon" /> */}
          <Link className="w-melissa-musique c-error_link" to="/" main>
            Retourner à l'accueil
          </Link>
        </div>
      </Effect>
    </div>
  );
}

export default Error;
