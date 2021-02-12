import React from "react";
import Herobody from "../../Component/Hero-body/Herobody";
import Description from "../../Component/Description/Description";
import Skills from "../../Component/skills/Skills";
import Work from "../../Component/Works/Work";
import Callout from "../../Component/Callout/Callout";
import Certif from "../../Component/Certif/Certif";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

const Main = () => {
  return (
    <>
      <Parallax
        pages={3}
        scrolling={false}
        horizontal
        ref={(ref) => (parallax() = ref)}
      >
        <Herobody />

        <div style={{ zIndex: -50 }}>
          <Description />
        </div>
        <div style={{ zIndex: 50, marginTop: "-100px" }}>
          <Skills />
        </div>

        <Work />
        <Callout />
        <Certif />
      </Parallax>
    </>
  );
};
export default Main;
