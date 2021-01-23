import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { animated as a, Trail } from "react-spring/renderprops";

import { formatClassNames as fcn } from "../../../helpers";

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
    text: "Contact",
    href: "#register"
  }
];

export default function NavigationItems({ onItemClick }) {
  return (
    <ul className={fcn("c-nav_list")}>
      <Trail items={navItems} keys={item => `nav--${item.text}`} from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {item => props => (
          <a.li style={props} className={fcn("c-nav_item")}>
            {item.to ? (
              <Link className={fcn("c-nav_link")} to={item.to} onClick={() => onItemClick()}>
                {item.text}
              </Link>
            ) : (
              <a className={fcn("c-nav_link")} href={item.href} onClick={() => onItemClick()}>
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
