import React, { useState, useEffect } from "react";
import "./Cursor.css";

export const ThemeContext = React.createContext<any>(null);

const Cursor = (props: any) => {
  const [theme, settheme] = useState<boolean>(false);
  const [position, setPosition] = useState<any>({ top: "0", left: "0" });

  return (
    <ThemeContext.Provider value={settheme}>
      <div
        onMouseMove={(e) =>
          setPosition({ top: `${e.pageY}px`, left: `${e.pageX}px` })
        }
      >
        <div
          className={`cursor` + (theme ? " active" : " null")}
          style={position}
        ></div>
        {props.children}
      </div>
    </ThemeContext.Provider>
  );
};

export default Cursor;
