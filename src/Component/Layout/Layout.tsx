import React from "react";
import "./Layout.css";
import Cursor from "../../Cursor/Cursor";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
const Layout = (props: any) => {
  return (
    <div>
      <Cursor>
        <Navbar />
        {props.children}
        <Footer />
      </Cursor>
    </div>
  );
};
export default Layout;
