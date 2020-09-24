import React from "react";
import cn from "classnames-helper";
import Fade from "react-reveal/Fade";

// Components
import Link from "../Link";

const getProfessionYears = () => new Date().getFullYear() - 2012;

function BiographyTease() {
  return (
    <section className="w-melissa-musique c-biography-tease o-section">
      <div className="o-container">
        <div className="o-layout -gutter">
          <article className="o-layout_item u-1/2@from-small">
            <h1 className="o-h1">Mélissa</h1>
            <h2 className="o-h2">Professeure de piano</h2>
            <p className="o-p">
              Bonjour, je suis professeure de piano depuis plus de {getProfessionYears()} ans et
              j'adore mon métier :)
            </p>
            <p className="o-p">
              Si vous souhaitez stimuler votre concentration ou simplement apprendre la musique en
              vous amusant, vous êtes à la bonne place!
            </p>
            <p className="o-p">
              <b>UdeM</b> | Baccalauréat en piano jazz
              <br />
              <b>Cégep Saint-Laurent</b> | Piano classique
            </p>
            <Link to="/info" main>
              En savoir plus
            </Link>
          </article>
          <article className="o-layout_item u-1/2@from-small">
            <Fade bottom>
              <div className={cn("w-melissa-musique", "c-biography-tease_profile")}>
                <img
                  src="./assets//melissa-bissonnette_cours-de-musique_piano.jpg"
                  alt="Mélissa Bissonnette | Professeure de piano et de violon"
                  className="w-melissa-musique c-biography-tease_profile_image"
                />
              </div>
            </Fade>
          </article>
        </div>
      </div>
    </section>
  );
}

export default BiographyTease;
