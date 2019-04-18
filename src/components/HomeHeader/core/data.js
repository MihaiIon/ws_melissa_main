// ======================================================
// Components / HomeHeader / Core / Data
// ======================================================

import React, { Fragment } from "react";

// Helper
import { createSlideHelper } from "../../../helpers";

// Components
import HeartIcon from "react-ionicons/lib/MdHeart";

export const SLIDES = [
  createSlideHelper(
    "home_slide_spectacle",
    ["Spectacle", "devant public"],
    "Participez chaque année au concert annuel de prestation des étudiants dans une salle de spectacle",
    "./assets/melissa-bissonnette_concert-piano-et-violon.jpg"
  ),
  createSlideHelper(
    "home_slide_cours",
    ["Des cours adaptés", "à votre niveau"],
    "Des cours personnalisés en fonction de votre niveau et de vos objectifs musicaux",
    "./assets/melissa-bissonnette_cours-debutant-a-avance.jpg"
  ),
  createSlideHelper(
    "home_slide_cours-2",
    ["Pour toute la famille"],
    <Fragment>
      <span style={{ display: "inline-block" }}>Tout le monde à le droit d'apprendre!</span>
      <HeartIcon
        style={{
          display: "inline-block",
          color: "rgb(255, 65, 65)",
          position: "relative",
          left: "10px",
          bottom: "3px",
          stroke: "#b03434",
          strokeWidth: "120px"
        }}
        color="current"
      />
    </Fragment>,
    "./assets/melissa-bissonnette_toute-la-famille.jpg"
  )
];
