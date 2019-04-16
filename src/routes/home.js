import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

//
import Page from "../components/Page";
import HomeHeader from "../components/HomeHeader";

function home(props) {
  return (
    <Page>
      <HomeHeader />
    </Page>
  );
}

home.propTypes = {};

export default home;
