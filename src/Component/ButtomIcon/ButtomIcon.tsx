import React,{useContext} from "react"
import { ThemeContext } from "../../Cursor/Cursor";
import "./ButtomIcon.css"
const ButtomIcon=({logo}:any)=>{
  const test = useContext(ThemeContext);

    return(
<div className="ButtomIconContainer" 
      onMouseEnter={()=>test(true)}
      onMouseLeave={()=>test(false)}
      >
  <img src={logo} className="Social_media"></img>
    </div>
    )
}
export default ButtomIcon