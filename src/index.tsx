import React from "react";

// Native
import ReactDOM from "react-dom";

// Private
import Routes from "./routes";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById("root")
);
