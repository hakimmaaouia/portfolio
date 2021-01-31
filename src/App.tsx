import React from "react";
import "./App.css";
import Layout from "./Component/Layout/Layout";
import Router from "./Router/Router"
import Herobody from "./Component/Hero-body/Herobody"
function App() {
  return (
    <div className="App">
     <Layout>
     <Herobody/>
       </Layout>
    </div>
  );
}

export default App;
