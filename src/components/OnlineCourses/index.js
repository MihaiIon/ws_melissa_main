import React, { Fragment } from "react";

import Article from "../Article";

import { formatClassNames as fcn } from "../../helpers";
import data from "./data";

function OnlineCourses() {
  return (
    <section className={fcn("c-online-courses")}>
      {data.map((props, index) => (
        <Article {...props} odd={index % 2 !== 0} zoom />
      ))}
    </section>
  );
}

export default OnlineCourses;
