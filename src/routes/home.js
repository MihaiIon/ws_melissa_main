import React from "react";

// Components
import Page from "../components/Page";
import HomeHeader from "../components/HomeHeader";
import ShortBiography from "../components/ShortBiography";
import Services from "../components/Services";
import Register from "../components/Register";

function home() {
  return (
    <Page>
      <HomeHeader />
      <ShortBiography />
      <Services />
      <Register />
    </Page>
  );
}

export default home;
