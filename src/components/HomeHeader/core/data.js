// ======================================================
// Components / HomeHeader / Core / Data
// ======================================================

import React, { Fragment } from "react";
import HeartIcon from "react-ionicons/lib/MdHeart";

import { createSlideHelper } from "../../../helpers";

export const SLIDES = [
  createSlideHelper(
    "home_slide_musique",
    ["Cours privés en ligne"],
    <Fragment>
      Venez apprendre le <b>piano</b> ou le <b>violon</b> en toute sécurité à partir du confort de
      votre domicile!
      <br />
      <br />
      Les cours privés sont maintenant disponibles par l'entremise de <b className="-zoom">Zoom</b>.
    </Fragment>,
    "./assets//melissa-bissonnette_concert-piano-et-violon.jpg"
  ),
  createSlideHelper(
    "home_slide_cours",
    ["Des cours privés", "adaptés à votre niveau"],
    "Profitez de cours sur mesure en fonction de votre niveau et de vos objectifs musicaux.",
    "./assets//melissa-bissonnette_cours-debutant-a-avance.jpg"
  ),
  createSlideHelper(
    "home_slide_cours-2",
    ["Pour toute la famille"],
    <Fragment>
      <span style={{ display: "inline-block" }}>Tout le monde a le droit d'apprendre</span>
      <HeartIcon
        style={{
          width: "33px",
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
    "./assets//melissa-bissonnette_toute-la-famille.jpg"
  )
];
