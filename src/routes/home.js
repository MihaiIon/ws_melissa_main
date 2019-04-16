import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

//
import Page from "../components/Page";
import HomeHeader from "../components/HomeHeader";
import QuickBio from "../components/QuickBio";

function home() {
  return (
    <Page>
      <HomeHeader />
      <QuickBio />
    </Page>
  );
}

home.propTypes = {};

export default home;
