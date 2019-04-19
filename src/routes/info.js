import React, { Fragment } from "react";

// Components
import Biography from "../components/Biography";
import Register from "../components/Register";
import Services from "../components/Services";

function info() {
  return (
    <Fragment>
      <Biography />
      <Services />
      <Register />
    </Fragment>
  );
}

export default info;
