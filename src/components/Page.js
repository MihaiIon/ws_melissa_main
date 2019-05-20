import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";

// Components
import Navigation from "./Navigation";
import Footer from "./Footer";

function Page({ children }) {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="w-melissa-musique c-page">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired
};

export default Page;
