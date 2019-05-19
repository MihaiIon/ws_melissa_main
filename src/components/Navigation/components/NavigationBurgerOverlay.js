import React from "react";
import PropTypes from "prop-types";
import { animated as a, Transition } from "react-spring/renderprops";

export default function NavigationBurgerOverlay({ isBurgerNavigationOpen, onClick }) {
  return (
    <Transition
      items={isBurgerNavigationOpen}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
    >
      {item => props => item && <a.div style={props} className="c-nav_overlay" onClick={onClick} />}
    </Transition>
  );
}

NavigationBurgerOverlay.propTypes = {
  isBurgerNavigationOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
