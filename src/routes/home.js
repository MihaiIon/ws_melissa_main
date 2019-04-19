import React from "react";

// Components
import BiographyTease from "../components/Biography/BiographyTease";
import HomeHeader from "../components/HomeHeader";
import Page from "../components/Page";
import Register from "../components/Register";
import ServicesTease from "../components/Services/ServicesTease";

function home() {
  return (
    <Page>
      <HomeHeader />
      <BiographyTease />
      <ServicesTease />
      <Register />
    </Page>
  );
}

export default home;
