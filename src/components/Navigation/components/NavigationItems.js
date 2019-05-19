import React from "react";
import PropTypes from "prop-types";
import cn from "classnames-helper";
import { Link } from "react-router-dom";
import { animated as a, Trail } from "react-spring/renderprops";

const navItems = [
  {
    text: "Accueil",
    to: "/"
  },
  {
    text: "Informations",
    to: "/info"
  },
  {
    text: "Inscription",
    href: "#register",
    feature: true
  }
];

export default function NavigationItems({ onItemClick }) {
  return (
    <ul className="w-melissa-musique c-nav_list">
      <Trail
        items={navItems}
        keys={item => `nav--${item.text}`}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {item => props => (
          <a.li style={props} className="w-melissa-musique c-nav_item">
            {item.to ? (
              <Link
                className="w-melissa-musique c-nav_link"
                to={item.to}
                onClick={() => onItemClick()}
              >
                {item.text}
              </Link>
            ) : (
              <a
                className={cn("w-melissa-musique c-nav_link", ["-feature", item.feature])}
                href={item.href}
                onClick={() => onItemClick()}
              >
                {item.text}
              </a>
            )}
          </a.li>
        )}
      </Trail>
    </ul>
  );
}

NavigationItems.defaultProps = {
  onItemClick: () => null
};

NavigationItems.propTypes = {
  onItemClick: PropTypes.func
};
