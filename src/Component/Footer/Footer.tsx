import React from "react";
import Bottom from "../Bottom/Bottom";
import ButtomIcon from "../ButtomIcon/ButtomIcon";
//icon
import logo_white from "../../Assets/logowhite.png";
import github from "../../Assets/Social media/github.svg";
import facebook from "../../Assets/Social media/facebook.svg";
import gmail from "../../Assets/Social media/gmail.svg";
import linkedin from "../../Assets/Social media/linkedin.svg";
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
        <img src={logo_white} className="mg-20" ></img>
        <div className="mg-20" >Living, learning, & leveling up one day at a time.</div>
        <span className="mg-20 letter-spacing"  >Tell:29554915</span>
        <div className="media mg-20" >
          <a href="https://github.com/hakimmaaouia" target="_top	">
            <ButtomIcon logo={github} />
          </a>
          <a href="https://www.facebook.com/hakim.maaouia.1/" target="_top	">
            {" "}
            <ButtomIcon logo={facebook} />
          </a>
          <a href="mailto:hakimmaaouia@gmail.com" target="_top	">
            <ButtomIcon logo={gmail} />
          </a>
          <a href="https://www.linkedin.com/in/hakim-maaouia-b86540187/" target="_top	">
            <ButtomIcon logo={linkedin} />
          </a>
        </div>
        <p>developed with &#128151; by hakim maaouia</p>
      </div>
    </div>
  );
};
export default Footer;
