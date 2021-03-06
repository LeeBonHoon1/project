import React from "react";
import ReactDOM from "react-dom";

import App from "./Component/App";

import { BrowserRouter } from "react-router-dom";
import firebase from "./firebase";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);
