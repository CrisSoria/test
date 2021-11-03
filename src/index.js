import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyle";
import Typography from "./styles/Typography";
// import {BrowserRouter as Router} from "react-router-dom"
ReactDOM.render(
  <Router>
    <GlobalStyles />
    <Typography />
    <App />
  </Router>,
  document.getElementById("root")
);
