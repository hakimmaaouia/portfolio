import React from "react"
import "./Card.css"
import test from "../../Assets/test.svg"
const Card=()=>{
return(
    <div className="testCart">
           <img src={test}></img>
        <h2  className="testCart">Designer</h2>
        <p className="testCart margenBottom">I value simple content structure, clean design patterns, and thoughtful interactions.
        </p >    
        <div className="testCart titleCard">Things I enjoy designing:</div>
        <p className="testCart margenBottom">UX, UI, Web, Mobile, Apps, Logos</p>
        <div className="testCart titleCard">Things I enjoy designing:</div>
        <p className="testCart margenBottom">
        Balsamiq Mockups
Figma
Invision
Marvel
Pen & Paper
Sketch
Webflow
Zeplin
       </p>
        </div>
)
}
export default Card;