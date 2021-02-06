import React from "react";
import "./Callout.css";
import Bottom from "../Bottom/Bottom";
import { Link } from "react-router-dom";
const Callout = () => {
  return (
    <div className="calloutContainer">
      <h3>Interested in collaborating or investing? </h3>
      <p>
        I’m always open to discussing product design work or partnership
        opportunities.
      </p>
      <Link to="Contact">
        <Bottom>Start a conversation</Bottom>
      </Link>
    </div>
  );
};

export default Callout;
