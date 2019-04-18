import React from "react";

// Components
import Page from "../components/Page";
import Register from "../components/Register";
import Biography from "../components/Biography";

function info() {
  return (
    <Page>
      <Biography />
      <Register />
    </Page>
  );
}

export default info;
