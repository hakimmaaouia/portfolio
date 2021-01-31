import React from "react";
import "./App.css";
import Layout from "./Component/Layout/Layout";
import Router from "./Router/Router"
import Herobody from "./Component/Hero-body/Herobody"
import Description from "./Component/Description/Description"
function App() {
  return (
    <div className="App">
     <Layout>
     <Herobody/>
     <Description/>
       </Layout>
    </div>
  );
}

export default App;
