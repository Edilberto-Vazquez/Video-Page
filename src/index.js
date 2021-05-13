import React from "react";
import ReactDom from "react-dom";
import App from "./containers/App.jsx";

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
