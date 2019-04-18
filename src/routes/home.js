import React, { Fragment } from "react";

// Components
import HomeHeader from "../components/HomeHeader";
import ShortBiography from "../components/ShortBiography";
import Services from "../components/Services";
import Register from "../components/Register";

function home() {
  return (
    <Fragment>
      <HomeHeader />
      <ShortBiography />
      <Services />
      <Register />
    </Fragment>
  );
}

export default home;
