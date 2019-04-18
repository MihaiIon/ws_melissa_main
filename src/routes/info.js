import React, { Fragment } from "react";

// Components
import Register from "../components/Register";
import Biography from "../components/Biography";

function info() {
  return (
    <Fragment>
      <Biography />
      <Register />
    </Fragment>
  );
}

export default info;
