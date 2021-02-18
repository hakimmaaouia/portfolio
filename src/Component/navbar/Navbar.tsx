import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../Assets/logo.png";
import Bottom from "../Bottom/Bottom";
import { ThemeContext } from "../../Cursor/Cursor";
import { Link } from "react-router-dom";
const Navbar = () => {
  const test = useContext(ThemeContext);
  return (
    <div className="nav">
      <Link to="/" className="logo">
        <img src={logo}></img>
      </Link>
      <ul>
        <li onMouseEnter={() => test(true)} onMouseLeave={() => test(false)}>
          <Link to="/#work" style={{ textDecoration: 'none' }}> Home</Link>
        </li>
        <li onMouseEnter={() => test(true)} onMouseLeave={() => test(false)}>
          <a href="#work" style={{ textDecoration: 'none' }}> Home</a>
        </li>
        <li onMouseEnter={() => test(true)} onMouseLeave={() => test(false)}>
          Articles
        </li>
        <li onMouseEnter={() => test(true)} onMouseLeave={() => test(false)}>
          Contact
        </li>
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
