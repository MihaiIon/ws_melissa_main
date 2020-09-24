import React, { Fragment } from "react";

// Components
import ServiceArticle from "./components/ServiceArticle";
import ServiceCovidWarning from "./components/ServiceCovidWarning";

function Services() {
  return (
    <section className="w-melissa-musique c-services">
      <ServiceArticle
        title="Cours de Piano"
        subtitle="Débutant à avancé"
        content={[
          "Au fil du temps, j'ai eu des étudiants âgés entre 4 ans et 80 ans!",
          "Je couvre plusieurs styles de musique, dont le classique, le jazz, la pop, le folklore, le metal et les musiques de films.",
          <Fragment>
            <b>1 heure</b> | 35$
            <br />
            <b>30 minutes</b> | 20$
            <br />
            <span style={{ fontSize: 13 }}>
              <em>*</em> Tous les cours sont offerts à mon domicile et/ou en ligne.
            </span>
          </Fragment>
        ]}
        imageUrl="./assets//melissa-bissonnette_cours-de-piano_debutant-intermaidiare-avance.png"
        imageDescription="Mélissa Bissonnette | Cours de piano - Débutant à avancé"
      />
      <ServiceArticle
        imageRight
        title="Cours de Violon"
        subtitle="Débutant"
        content={[
          "J'ai suivi 4 ans de cours de violon au privé. Je suis donc en mesure de vous initier à ce bel instrument tout en vous faisant découvrir le répertoire musical classique.",
          "Pour plus d'information, contactez-moi!",
          <Fragment>
            <b>1 heure</b> | 35$
            <br />
            <b>30 minutes</b> | 20$
            <br />
            <span style={{ fontSize: 13 }}>
              <em>*</em> Tous les cours sont offerts à mon domicile et/ou en ligne.
            </span>
          </Fragment>
        ]}
        imageUrl="./assets//melissa-bissonnette_cours-de-violon_debutant.png"
        imageDescription="Mélissa Bissonnette | Cours de piano - Débutant à avancé"
      />
      <ServiceArticle
        title="Récitals"
        subtitle="Un peu de stress :)"
        content={[
          "Les récitals vous offrent de belles occasions pour jouer de la musique devant un public.",
          "Votre participation n'est en aucun cas obligatoire! Chaque année, une vingtaine d'étudiants manifestent leur intérêt à participer à ceux-ci.",
          <Fragment>
            <b>Billeterie</b> | 7$ par spectateur
            <br />
            <span style={{ fontSize: 13 }}>
              <em>*</em> Gratuit pour les enfants de moins de 12 ans.
            </span>
            <ServiceCovidWarning />
          </Fragment>
        ]}
        imageUrl="./assets//melissa-bissonnette_recitals.png"
        imageDescription="Mélissa Bissonnette | Cours de piano - Débutant à avancé"
      />
    </section>
  );
}

export default Services;
