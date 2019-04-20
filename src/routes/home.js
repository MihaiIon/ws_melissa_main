import React from "react";
import { Helmet } from "react-helmet";

// Components
import BiographyTease from "../components/Biography/BiographyTease";
import HomeHeader from "../components/HomeHeader";
import Page from "../components/Page";
import Register from "../components/Register";
import ServicesTease from "../components/Services/ServicesTease";

function home() {
  return (
    <Page>
      <Helmet>
        <title>Mélissa Bissonnette | Accueil</title>
      </Helmet>
      <HomeHeader />
      <BiographyTease />
      <ServicesTease />
      <Register />
    </Page>
  );
}

export default home;
