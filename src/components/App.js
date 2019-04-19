import React from "react";
import { BrowserRouter } from "react-router-dom";

// Components
import Routes from "../routes";

function App() {
  return (
    <div className="w-melissa-musique c-app">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
