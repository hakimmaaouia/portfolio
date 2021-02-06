import React, { useEffect, useState } from "react";
import "./Cursor.css";

const Cursor = (props: any) => {
  let spanStyles = {
    top: "0px",
    left: "0px",
  };

  const [position, setPosition] = useState<any>({ top: "0", left: "0" });


  return (
    <div  onMouseMove={(e) => setPosition({ top: `${e.pageY}px`, left: `${e.pageX}px` })}>
      <div className="cursor" style={position}></div>
      {props.children}
    </div>
  );
};

export default Cursor;
