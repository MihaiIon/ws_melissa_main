import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

//
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

home.propTypes = {};

export default home;
