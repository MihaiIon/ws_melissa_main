import React, { Fragment } from "react";
import PropTypes from "prop-types";

// Components
import { Fade } from "react-reveal";

function ServiceArticle({ imageRight, imageUrl, imageDescription, title, subtitle, content }) {
  // Image component
  const Image = (
    <Fade up>
      <img
        className="w-melissa-musique c-services_article_img"
        src={imageUrl}
        alt={imageDescription}
      />
    </Fade>
  );

  // Description component
  const Description = (
    <Fragment>
      <h1 className="w-melissa-musique c-services_title o-h1">{title}</h1>
      <h2 className="w-melissa-musique c-services_subtitle o-h2">{subtitle}</h2>
      {content.map(text => (
        <p key={text} className="o-p">
          {text}
        </p>
      ))}
    </Fragment>
  );

  return (
    <article className="w-melissa-musique c-services_article o-layout">
      <div className="o-container">
        <div className="o-layout_item u-1/2@from-small">
          <div className="w-melissa-musique c-services_article_view">
            {imageRight ? Description : Image}
          </div>
        </div>
        <div className="o-layout_item u-1/2@from-small">
          <div className="w-melissa-musique c-services_article_view">
            {imageRight ? Image : Description}
          </div>
        </div>
      </div>
    </article>
  );
}

ServiceArticle.defaultProps = {
  imageRight: false
};

ServiceArticle.propTypes = {
  imageRight: PropTypes.bool,
  imageUrl: PropTypes.string.isRequired,
  imageDescription: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default ServiceArticle;
