// ======================================================
// Helpers
// ======================================================

import cn from "classnames-helper";

export { default as createSlideHelper } from "./createSlideHelper";

export const buildAssetUrl = fileName => `./assets/${fileName}`;

export const formatClassNames = (...classNames) => cn("w-melissa-musique", ...classNames).trim();

export const formatArticleProps = ({ content, imageDescription, imageLarge = false, imageSource, subtitle = null, title }) => ({
  description: { content, subtitle, title },
  image: { alt: imageDescription, src: imageSource, large: imageLarge }
});
