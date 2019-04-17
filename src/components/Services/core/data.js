// ======================================================
// Components / Services / Core / Data
// ======================================================

// Helper
import { createSlideHelper } from "../../../helpers";

export const ITEMS = [
  createSlideHelper(
    ["Cours", "de piano"],
    "Des cours personnalisés en fonction de votre niveau et de vos objectifs",
    "./assets/melissa-bissonnette_concert-piano-et-violon.jpg"
  ),
  createSlideHelper(
    ["Spectacle", "devant public"],
    "Participez chaque année au concert annuel de prestation des étudiants dans une salle de spectacle",
    "./assets/melissa-bissonnette_concert-devant-public.jpg"
  ),
  createSlideHelper(
    ["Cours", "de violon"],
    "Le violon vous intéresse? Contactez-moi pour plus d'information",
    "./assets/melissa-bissonnette_cours-de-violon.jpg"
  )
];
