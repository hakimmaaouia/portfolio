import React from "react";
import "./WorkCard.css";
import Bottom from "../Bottom/Bottom";
const WorkCard = () => {
  return (
    <div className="container">
      <img src="https://unsplash.it/400/400" alt=""></img>
      <div className="overlay">
        <span>
          <p>
          High-end, custom residential renovaters serving Fraser Valley homeowners.
          </p>
          <a href="https://www.google.com/"  target="_blank">
          <Bottom>Visit Website</Bottom>
          </a>
        </span>
      </div>
    </div>
  );
};

export default WorkCard;
