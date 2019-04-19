import React from "react";
import cn from "classnames-helper";
import Fade from "react-reveal/Fade";

// Components
import Link from "../Link";

function BiographyTease() {
  return (
    <section className="w-melissa-musique c-biography-tease o-wrapper o-section">
      <div className="o-layout -gutter">
        <article className="o-layout_item u-1/2">
          <h1 className="o-h1">Mélissa</h1>
          <h2 className="o-h2">Professeure de piano</h2>
          <p className="o-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="o-p">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>
          <Link to="/info" main>
            En savoir plus
          </Link>
        </article>
        <article className="o-layout_item u-1/2">
          <Fade bottom>
            <div className={cn("w-melissa-musique", "c-biography-tease_profile")}>
              <img
                src="./assets/melissa-bissonnette_cours-de-musique_piano.jpg"
                alt="Mélissa Bissonnette | Professeure de piano et de violon"
                className="w-melissa-musique c-biography-tease_profile_image"
              />
            </div>
          </Fade>
        </article>
      </div>
    </section>
  );
}

export default BiographyTease;
