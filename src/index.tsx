import React from "react";

// Native
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

// Locales
import './locales'

// Private
import Routes from "./routes";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById("root")
);
