import React, { useEffect, useState } from "react";
import "./Cursor.css"


const Cursor=(props:any)=>{
    
    let spanStyles = {
        top: "0px",
       left: "0px"
      };
 

    const [position, setPosition] = useState<any>({top:"0", left:"0"});
   
    const onMouseMove = (event:any) => {
        const { pageX: x, pageY: y } = event;
        setPosition({top:`${y}px`,left:`${x}px`})
        
      };
    
      useEffect(() => {
        document.addEventListener("mousemove", onMouseMove);
    
        return () => {
          document.removeEventListener("mousemove", onMouseMove);
        };
      });
    
     
    
    return(
        <div   
       >
            <div className="cursor" style={position} ></div>
            {props.children}
            </div>
    )
}

export default Cursor