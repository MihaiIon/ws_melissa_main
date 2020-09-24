import React from "react";
import PropTypes from "prop-types";
import { animated as a, Spring, Transition } from "react-spring/renderprops";

// Components
import NavigationItems from "./NavigationItems";
import AnimatedMusicNote from "../../../components-anim/AnimatedMusicNote";

function NavigationBurgerPanel({ isBurgerNavigationOpen, setBurgerNavigationState }) {
  return (
    <Transition
      items={isBurgerNavigationOpen}
      from={{ width: "0%" }}
      leave={{ width: "0%" }}
      enter={{ width: "75%" }}
    >
      {item => props =>
        item && (
          <a.aside style={props} className="c-nav_burger-panel">
            <h2 className="c-nav_burger-panel_title o-h2">
              Mélissa
              <br />
              Bissonnette
            </h2>
            <hr className="c-nav_burger-panel_separator" />
            <NavigationItems onItemClick={() => setBurgerNavigationState(false)} />
            <AnimatedMusicNote className="c-nav_burger-panel_music-note" />
          </a.aside>
        )}
    </Transition>
  );
}

NavigationBurgerPanel.propTypes = {
  isBurgerNavigationOpen: PropTypes.bool.isRequired,
  setBurgerNavigationState: PropTypes.func.isRequired
};

export default NavigationBurgerPanel;
