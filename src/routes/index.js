import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Import routes
import home from "./home";
import info from "./info";
import error from "./error";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/info" component={info} />
        <Route exact path="/:error" component={error} />
      </Switch>
    );
  }
}

export default Routes;
