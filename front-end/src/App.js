import React from "react";
import Routes from "./routes";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <RecoilRoot>
      <Router>
        <Routes />
      </Router>
    </RecoilRoot>
  );
};

export default App;
