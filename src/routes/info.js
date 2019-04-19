import React from "react";

// Components
import Biography from "../components/Biography";
import Page from "../components/Page";
import Register from "../components/Register";
import Services from "../components/Services";

function info() {
  return (
    <Page>
      <Biography />
      <Services />
      <Register />
    </Page>
  );
}

export default info;
