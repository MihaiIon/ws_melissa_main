import React, { Fragment } from "react";

// Components
import HomeHeader from "../components/HomeHeader";
import BiographyTease from "../components/Biography/BiographyTease";
import ServicesTease from "../components/Services/ServicesTease";
import Register from "../components/Register";

function home() {
  return (
    <Fragment>
      <HomeHeader />
      <BiographyTease />
      <ServicesTease />
      <Register />
    </Fragment>
  );
}

export default home;
