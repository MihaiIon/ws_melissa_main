import React from "react";
import PropTypes from "prop-types";

function P({ children }) {
  return <p className="o-p">{children}</p>;
}

P.propTypes = {
  children: PropTypes.node.isRequired
};

export default P;
