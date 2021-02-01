import React from "react";
import "./App.css";
import Layout from "./Component/Layout/Layout";
import Router from "./Router/Router"
import Herobody from "./Component/Hero-body/Herobody"
import Description from "./Component/Description/Description"
import Skills from "./Component/skills/Skills"
import Work from "./Component/Works/Work"
function App() {
  return (
    <div className="App">
     <Layout>
   <Work/>
       </Layout>
    </div>
  );
}

export default App;
