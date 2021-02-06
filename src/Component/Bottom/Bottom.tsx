import react from "react";
import "./Bottom.css";

const Bottom = ({onClick,children}:any) => {
  return (
      <div className="Bottom_container"onClick={onClick}>{children}</div>
  );
};
export default Bottom;
