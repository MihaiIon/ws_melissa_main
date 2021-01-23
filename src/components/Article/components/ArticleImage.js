import PropTypes from "prop-types";
import React from "react";
import { Fade as DefaultAnimation } from "react-reveal";

import { formatClassNames as fcn } from "../../../helpers";

function ArticleImage({ alt, animationFn, large, src }) {
  if (typeof animationFn === "function") {
    console.log(animationFn());
  }
  const Animation = typeof animationFn === "function" ? animationFn() : DefaultAnimation;

  return (
    <div className={fcn("c-arcticle-image", "o-layout_item u-1/2@from-small")}>
      <div className={fcn("c-article-image_wrapper")}>
        <Animation bottom>
          <img className={fcn("c-article-image_img", ["-large", large])} alt={alt} src={src} />
        </Animation>
      </div>
    </div>
  );
}

ArticleImage.defaultProps = {
  animationFn: null
};

ArticleImage.propTypes = {
  alt: PropTypes.string.isRequired,
  animationFn: PropTypes.func,
  large: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired
};

export default ArticleImage;
