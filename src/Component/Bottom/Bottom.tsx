import react, { useContext } from "react";
import { ThemeContext } from "../../Cursor/Cursor";
import "./Bottom.css";

const Bottom = ({ onClick, children }: any) => {
  const test = useContext(ThemeContext);

  return (
    <div
      className="Bottom_container"
      onClick={onClick}
      onMouseEnter={()=>test(true)}
      onMouseLeave={()=>test(false)}
    >
      {children}
    </div>
  );
};
export default Bottom;
