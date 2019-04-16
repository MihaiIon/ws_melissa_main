import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

// Import routes
import Home from "./home";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" render={props => <Home {...props} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
