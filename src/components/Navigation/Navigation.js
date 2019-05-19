import React, { useState, useEffect, Fragment } from "react";
import cn from "classnames-helper";

// Components
import BurgerIcon from "react-ionicons/lib/IosMenu";
import NavigationItems from "./components/NavigationItems";
import NavigationBurgerOverlay from "./components/NavigationBurgerOverlay";
import NavigationBurgerPanel from "./components/NavigationBurgerPanel";

// Navigation
// ======================================================

function Navigation() {
  const [isBurgerNavigationOpen, setBurgerNavigationState] = useState(false);
  const [isShrinked, setShrinkState] = useState(false);
  useEffect(() => {
    const doc = document.documentElement;
    const fn = () => {
      const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      if (top <= 60) setShrinkState(false);
      else setShrinkState(true);
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <Fragment>
      <NavigationBurgerOverlay
        isBurgerNavigationOpen={isBurgerNavigationOpen}
        onClick={() => setBurgerNavigationState(false)}
      />
      <NavigationBurgerPanel
        isBurgerNavigationOpen={isBurgerNavigationOpen}
        setBurgerNavigationState={setBurgerNavigationState}
      />
      <nav className={cn("w-melissa-musique", "c-nav", ["-shrink", isShrinked])}>
        <div className="o-container">
          <NavigationItems />
          <button
            type="button"
            className="c-nav_burger-toggle-btn"
            onClick={() => setBurgerNavigationState(true)}
          >
            <BurgerIcon className="c-nav_burger-toggle-btn_icon" color="current" />
          </button>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navigation;
