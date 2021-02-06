import React from "react";
import "./Navbar.css";
import logo from "../../Assets/logo.png";
import Bottom from "../Bottom/Bottom";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/" className="logo">
        <img src={logo} ></img>
      </Link>
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>

        <li>Projects</li>
        <li>Articles</li>
        <li>Contact</li>
        <li>
          <Link to="Contact">
            <Bottom>say hello</Bottom>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
