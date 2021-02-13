import React, { useEffect, useState } from "react";
import "./Cursor.css";


export  const ThemeContext = React.createContext("defaultTheme");

const Cursor = (props: any) => {
 

  const [position, setPosition] = useState<any>({ top: "0", left: "0" });

  return (
    <ThemeContext.Provider value={"theme"}>
    <div
      onMouseMove={(e) =>
        setPosition({ top: `${e.pageY}px`, left: `${e.pageX}px` })
      }
    >
      <div className="cursor" style={position}></div>
      {props.children}
    </div>
    </ThemeContext.Provider>
  );
};

export default Cursor;
