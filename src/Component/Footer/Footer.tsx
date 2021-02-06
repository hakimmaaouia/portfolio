import React from "react";
import Bottom from "../Bottom/Bottom";
import logo_white from "../../Assets/logowhite.png";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="start_container">
        <div>
          <h1>Start a project</h1>
        </div>

        <div className="level-item">
          <p>
            Interested in working together? We should queue up a chat. I’ll buy
            the coffee.
          </p>
        </div>
        <div>
          <Link to="Contact">
          <Bottom>
            <h3>Start a project</h3>
          </Bottom>
          </Link>
        </div>
      </div>

      <div className="footer">
        <img src={logo_white}></img>
        <div>Living, learning, & leveling up one day at a time.</div>
      </div>
    </div>
  );
};
export default Footer;
