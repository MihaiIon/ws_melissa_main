import React from "react";

// Components
import Page from "../components/Page";
import HomeHeader from "../components/HomeHeader";
import QuickBio from "../components/QuickBio";
import Services from "../components/Services";

function home() {
  return (
    <Page>
      <HomeHeader />
      <QuickBio />
      <Services />
    </Page>
  );
}

export default home;
