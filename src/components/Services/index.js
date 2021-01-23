import React, { Fragment } from "react";

import { formatClassNames as fcn, formatArticleProps } from "../../helpers";

// Components
import Article from "../Article";
import ServiceDetails from "./components/ServiceDetails";
import ServiceCovidWarning from "./components/ServiceCovidWarning";

function Services() {
  const data = [
    formatArticleProps({
      content: [
        "Au fil du temps, j'ai eu des étudiants âgés entre 4 ans et 80 ans!",
        "Je couvre plusieurs styles de musique, dont le classique, le jazz, la pop, le folklore, le metal et les musiques de films.",
        <ServiceDetails halfhourFine={25} hourFine={35} />
      ],
      imageSource: "./assets//melissa-bissonnette_cours-de-piano_debutant-intermaidiare-avance.png",
      imageDescription: "Mélissa Bissonnette | Cours de piano - Débutant à avancé",
      subtitle: "Débutant à avancé",
      title: "Cours de Piano"
    }),
    formatArticleProps({
      content: [
        "J'ai suivi 4 ans de cours de violon au privé. Je suis donc en mesure de vous initier à ce bel instrument tout en vous faisant découvrir le répertoire musical classique.",
        "Pour plus d'information, contactez-moi!",
        <ServiceDetails halfhourFine={25} hourFine={35} />
      ],
      imageSource: "./assets//melissa-bissonnette_cours-de-violon_debutant.png",
      imageDescription: "Mélissa Bissonnette | Cours de violon - Débutant",
      subtitle: "Débutant",
      title: "Cours de Violon"
    }),
    formatArticleProps({
      content: [
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
      ],
      imageSource: "./assets//melissa-bissonnette_recitals.png",
      imageDescription: "Mélissa Bissonnette | Récitals",
      subtitle: "Un peu de stress :)",
      title: "Récitals"
    })
  ];

  return (
    <section className={fcn("c-services")}>
      {data.map((props, index) => (
        <Article {...props} odd={index % 2 !== 0} />
      ))}
    </section>
  );
}

export default Services;
