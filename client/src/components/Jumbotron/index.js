import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return <div id="jumbo" className="jumbotron mt-4">{children}</div>;
}

export default Jumbotron;
