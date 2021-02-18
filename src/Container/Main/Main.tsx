import React from "react";
import Herobody from "../../Component/Hero-body/Herobody";
import Description from "../../Component/Description/Description";
import Skills from "../../Component/skills/Skills";
import Work from "../../Component/Works/Work";
import Callout from "../../Component/Callout/Callout";
import Certif from "../../Component/Certif/Certif";

const Main = () => {
  return (
    <>
        <Herobody />

        <div>
          <Description />
        </div>
        <div id="work">
          <Skills />
        </div>

        <Work />
        <Callout />
        <Certif />
    </>
  );
};
export default Main;
