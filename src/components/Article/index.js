import React from "react";
import PropTypes from "prop-types";

import ArticleDescription from "./components/ArticleDescription";
import ArticleImage from "./components/ArticleImage";

import { formatClassNames as fcn } from "../../helpers";

function Article({ animationFn, description, feature, image, odd, zoom }) {
  const renderDescription = () => <ArticleDescription {...description} zoom={zoom} />;
  const renderImage = () => <ArticleImage {...image} animationFn={animationFn} />;

  return (
    <article className={fcn("c-article o-layout", ["-feature", feature])}>
      <div className={fcn("o-container")}>
        {odd ? renderDescription() : renderImage()}
        {odd ? renderImage() : renderDescription()}
      </div>
    </article>
  );
}

Article.defaultProps = {
  animationFn: null,
  feature: false,
  odd: false,
  zoom: false
};

Article.propTypes = {
  animationFn: PropTypes.func,
  description: PropTypes.objectOf({
    content: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
    subtitle: PropTypes.string,
    title: PropTypes.string.isRequired
  }).isRequired,
  feature: PropTypes.bool,
  image: PropTypes.objectOf({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired,
  odd: PropTypes.bool,
  zoom: PropTypes.bool
};

export default Article;
