import React from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.png'
import Bottom from '../Bottom/Bottom'
const Navbar=()=>{
   
return(
    <div className="nav">
          <img src={logo} className="logo"></img>
       <ul >
  <li>Home</li>
  <li>Projects</li>
  <li>Articles</li>
  <li>Contact</li>
  <li><Bottom>say hello</Bottom></li>
</ul>
        </div>
)
}

export default Navbar;