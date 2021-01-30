import React from "react";
import "./App.css";
import Bottom from "./Component/Bottom/Bottom";
import Cursor from "./Cursor/Cursor"
function App() {
  return (
    <div className="App">
      <Cursor>
      <Bottom>TEST</Bottom>
      <Bottom>TEST</Bottom>
    </Cursor>
    </div>
  );
}

export default App;
