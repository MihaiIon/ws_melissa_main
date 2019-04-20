import React from "react";
import { Helmet } from "react-helmet";

// Components
import Biography from "../components/Biography";
import Page from "../components/Page";
import Register from "../components/Register";
import Services from "../components/Services";

function info() {
  return (
    <Page>
      <Helmet>
        <title>Mélissa Bissonnette | Informations</title>
      </Helmet>
      <Biography />
      <Services />
      <Register />
    </Page>
  );
}

export default info;
