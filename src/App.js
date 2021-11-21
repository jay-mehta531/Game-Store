import React from "react";
import { Route } from "react-router-dom";
//Components and pages
import Home from "./pages/Home";
import GlobalStyles from "./cpmponents/GlobalStyles";
import Nav from "./cpmponents/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
