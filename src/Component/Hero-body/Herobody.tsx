import React from "react";
import "./Herobody.css";
import hero from "../../Assets/hero.png"

const Herobody=()=>{
    return(
        <div className="herocontainer">
            <h1>Designer, Front-end Developer & Mentor</h1>
            <p>I design and code beautifully simple things, and I love what I do.</p>
            <img src={hero} className="heroimg"></img>
            </div>
    )
}
export default Herobody;