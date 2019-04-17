import React from "react";
import cn from "classnames-helper";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

// Constants
import DATA from "./core/data";

const { title, subtitle, content } = DATA;

function ShortBiography() {
  return (
    <section className="w-melissa-musique c-short-biography o-wrapper o-section">
      <div className="o-layout">
        <article className="o-layout_item u-1/2">
          <h1 className="o-h1">{title}</h1>
          <h2 className="o-h2">{subtitle}</h2>
          {content.map(text => (
            <p className="o-p">{text}</p>
          ))}
          <Link className="o-link" to="/info">
            En savoir plus
          </Link>
        </article>
        <article className="o-layout_item u-1/2">
          <Fade bottom>
            <div className={cn("w-melissa-musique", "c-short-biography_profile")}>
              <img
                src="./assets/melissa-bissonnette_cours-de-musique_piano.jpg"
                alt="Mélissa Bissonnette | Professeure de piano et de violon"
                className="w-melissa-musique c-short-biography_profile_image"
              />
            </div>
          </Fade>
        </article>
      </div>
    </section>
  );
}

export default ShortBiography;