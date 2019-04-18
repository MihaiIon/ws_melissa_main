import React, { useState, useEffect } from "react";
import cn from "classnames-helper";
import { Link } from "react-router-dom";

function Navigation() {
  // State management
  const [isShrinked, setShrinkState] = useState(false);

  // Set listeners
  useEffect(() => {
    const doc = document.documentElement;
    window.addEventListener("scroll", function onScroll() {
      const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      if (top <= 60) setShrinkState(false);
      else setShrinkState(true);
    });
  }, []);

  return (
    <nav className={cn("w-melissa-musique", "c-nav", "o-wrapper", ["-shrink", isShrinked])}>
      <ul className="w-melissa-musique c-nav_list">
        <li className="w-melissa-musique c-nav_item">
          <Link className="w-melissa-musique c-nav_link" to="/">
            Accueil
          </Link>
        </li>
        <li className="w-melissa-musique c-nav_item">
          <Link className="w-melissa-musique c-nav_link" to="/info">
            Informations
          </Link>
        </li>
        <li className="w-melissa-musique c-nav_item">
          <Link className="w-melissa-musique c-nav_link -feature" to="todo">
            Inscription
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;