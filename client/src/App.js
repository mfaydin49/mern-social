import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./component/layout/Navbar";
import Landing from "./component/layout/Landing";

const App = () => (
  <Fragment className="App">
    <Navbar />
    <Landing />
  </Fragment>
);

export default App;
