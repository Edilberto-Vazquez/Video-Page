import React from "react";
import ReactDom from "react-dom";
import HelloWorld from "./components/HelloWorld";

ReactDom.render(
  <React.StrictMode>
    <HelloWorld />
  </React.StrictMode>,
  document.getElementById("app")
);
