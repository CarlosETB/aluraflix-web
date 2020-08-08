import React from "react";

// Native
import ReactDOM from "react-dom";

// Private
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
