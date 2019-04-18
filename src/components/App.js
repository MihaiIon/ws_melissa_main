import React from "react";
import { BrowserRouter } from "react-router-dom";

// Components
import Routes from "../routes";
import Page from "./Page";

function App() {
  return (
    <div className="w-melissa-musique c-app">
      <BrowserRouter>
        <Page>
          <Routes />
        </Page>
      </BrowserRouter>
    </div>
  );
}

export default App;
