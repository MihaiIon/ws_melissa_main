import React from "react";
import PropTypes from "prop-types";
import cn from "classnames-helper";
import { Link as RouterLink } from "react-router-dom";

function Link({ children, to, main, feature, disabled }) {
  return (
    <RouterLink
      to={to}
      disabled={disabled}
      onClick={e => {
        if (disabled) e.preventDefault();
      }}
      className={cn(
        "w-melissa-musique",
        "c-link",
        ["-main", !disabled && main],
        ["-feature", !disabled && !main && feature],
        ["-disabled", disabled]
      )}
    >
      {children}
    </RouterLink>
  );
}

Link.defaultProps = {
  disabled: false,
  feature: false,
  main: false
};

Link.propTypes = {
  disabled: PropTypes.bool,
  feature: PropTypes.bool,
  main: PropTypes.bool,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Link;
