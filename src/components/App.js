import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import cn from "classnames-helper";

// Components
import Routes from "../routes";
import Loading from "./Loading";

export const AppContext = React.createContext();

function App() {
  const [isLoading, setLoadingVisibility] = useState(false);
  const ctx = {
    isLoading,
    setLoadingVisibility
  };

  return (
    <div className={cn("w-melissa-musique", "c-app", ["-crop", isLoading])}>
      <AppContext.Provider value={ctx}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <Loading show={isLoading} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
