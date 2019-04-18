// ======================================================
// Components / Services / Core / Data
// ======================================================

// Helper
import { createSlideHelper } from "../../../helpers";

export const ITEMS = [
  createSlideHelper(
    "services_cours-piano",
    ["Cours", "de piano"],
    "Des cours personnalisés, débutant à avancé, en fonction de votre niveau et de vos objectifs",
    "./assets/melissa-bissonnette_concert-piano-et-violon.jpg"
  ),
  createSlideHelper(
    "services_spectacle",
    ["Spectacle", "devant public"],
    "Venez participer et écouter le progrès de d'autres étudiants lors des deux concerts annuels organisés pour vous",
    "./assets/melissa-bissonnette_concert-devant-public.jpg"
  ),
  createSlideHelper(
    "services_cours-violon",
    ["Cours", "de violon"],
    "Le violon vous intéresse? Contactez-moi pour plus d'information!",
    "./assets/melissa-bissonnette_cours-de-violon.jpg"
  )
];
