import React, { Component } from "react";
import { Route, Switch, Router } from "react-router-dom";

// Import routes
import Home from "./home";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" render={routeProps => <Home {...routeProps} />} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
