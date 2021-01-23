import React from "react";
import PropTypes from "prop-types";

import { formatClassNames as fcn } from "../../../helpers";

function ArticleDescription({ content, subtitle, title, zoom }) {
  return (
    <div className={fcn("c-article-description o-layout_item u-1/2@from-small")}>
      <div className={fcn("c-article-description_wrapper")}>
        <h1 className={fcn(`c-article-description_title o-h1 ${zoom ? "-zoom" : ""}`)}>{title}</h1>
        {subtitle && <h2 className={fcn("c-article-description_subtitle o-h2")}>{subtitle}</h2>}
        {content.map(text => (
          <p key={text} className={fcn("o-p")}>
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}

ArticleDescription.defaultProps = {
  subtitle: null,
  zoom: false
};

ArticleDescription.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  zoom: PropTypes.bool
};

export default ArticleDescription;
