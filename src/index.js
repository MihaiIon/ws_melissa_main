import React from "react";
import ReactDOM from "react-dom";
import "@babel/polyfill";

// Styles
import "./scss/main.scss";

// Components
import App from "./components/App";

// Hot reloading  
if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById("root"));
