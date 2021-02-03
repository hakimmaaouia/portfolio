import React from "react"
import "./Card.css"
import Logo from ".././../Assets/logo.png"
const Card=()=>{
    return(
<div className="CardCertif">
<img src={Logo} className="imgcertif"></img>
<p className="testcertif">
Next level plug and play chassis systems for custom do-it-yourself lightsaber builds.
</p>
    </div>
    )
}
export default Card;