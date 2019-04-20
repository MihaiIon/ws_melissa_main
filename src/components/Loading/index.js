import React from "react";
import PropTypes from "prop-types";
import { animated as a, useTransition } from "react-spring";

function Loading({ show }) {
  const transitions = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  return transitions.map(
    ({ item, props }) => item && <a.aside props={props} className="w-melissa-musique c-loading" />
  );
}

Loading.propTypes = {
  show: PropTypes.bool.isRequired
};

export default Loading;
