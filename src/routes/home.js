import React from "react";
import { Helmet } from "react-helmet";

// Components
import BiographyTease from "../components/Biography/BiographyTease";
import HomeHeader from "../components/HomeHeader";
import Gift from "../components/Gift";
import OnlineCourses from "../components/OnlineCourses";
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
      <OnlineCourses />
      <ServicesTease />
      <Gift />
      <BiographyTease />
      <Register />
    </Page>
  );
}

export default home;
