import React from "react"
import "./Avatar.css"
import avatar from "../../Assets/avatar.svg"
const Avatar=()=>{
    return(
        <div className="AvatarContainer">
<hr className="line"></hr><img src={avatar} className="avatar"></img>  <hr  className="line"></hr>
            </div>
    )
}
export default Avatar ;