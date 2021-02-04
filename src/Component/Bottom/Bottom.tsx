import react from "react";
import "./Bottom.css";

const Bottom = (props: any) => {
  return (
    <div className="btn">
      <div className="Bottom_container">{props.children}</div>
    </div>
  );
};
export default Bottom;
