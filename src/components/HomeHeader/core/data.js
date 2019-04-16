// ======================================================
// Components / HomeHeader / Core / Data
// ======================================================

import React, { Fragment } from "react";

// Components
import HeartIcon from "react-ionicons/lib/MdHeart";

// Helper
const createSlideHelper = (
  title = [],
  description = "MISSING_DESCRIPTION",
  url = "MISSING_URL"
) => {
  // Format title array
  let formatedTitle = ["MISSING_TITLE"];
  if (typeof title === "string" || title instanceof String) {
    formatedTitle = [title];
  } else if (title instanceof Array && title.length > 0) {
    formatedTitle = title;
  }

  return {
    title: formatedTitle.map(t => t.toUpperCase()),
    description,
    url
  };
};

export const SLIDES = [
  createSlideHelper(
    ["Spectacle", "devant public"],
    "Participez chaque année au concert annuel de prestation des étudiants dans une salle de spectacle",
    "./assets/melissa-bissonnette_concert-piano-et-violon.jpg"
  ),
  createSlideHelper(
    ["Des cours adaptés", "à votre niveau"],
    "Des cours personnalisés en fonction de votre niveau et de vos objectifs musicaux",
    "./assets/melissa-bissonnette_cours-debutant-a-avance.jpg"
  ),
  createSlideHelper(
    ["Pour toute la famille"],
    <Fragment>
      <span style={{ display: "inline-block" }}>Tout le monde à le droit d'apprendre!</span>
      <HeartIcon
        style={{
          display: "inline-block",
          color: "#ff7070",
          position: "relative",
          left: "5px",
          bottom: "3px"
        }}
        color="current"
      />
    </Fragment>,
    "./assets/melissa-bissonnette_toute-la-famille.jpg"
  )
];
