import React from "react";

// Components
import ServiceArticle from "./components/ServiceArticle";

function Services() {
  return (
    <section className="w-melissa-musique c-services">
      <ServiceArticle
        title="Cours de Piano"
        subtitle="Débutant à avancé"
        content={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ]}
        imageUrl="./assets//melissa-bissonnette_cours-de-piano_debutant-intermaidiare-avance.png"
        imageDescription="Mélissa Bissonnette | Cours de piano - Débutant à avancé"
      />
      <ServiceArticle
        imageRight
        title="Cours de Violon"
        subtitle="Débutant"
        content={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ]}
        imageUrl="./assets//melissa-bissonnette_cours-de-violon_debutant.png"
        imageDescription="Mélissa Bissonnette | Cours de piano - Débutant à avancé"
      />
      <ServiceArticle
        title="Récitals"
        subtitle="Un peu de stresse :)"
        content={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ]}
        imageUrl="./assets//melissa-bissonnette_recitals.png"
        imageDescription="Mélissa Bissonnette | Cours de piano - Débutant à avancé"
      />
    </section>
  );
}

export default Services;
