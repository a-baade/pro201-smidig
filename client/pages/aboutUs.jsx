import React from "react";
import MainBg from "../pics/about-us-pictures/main-bg.png";
import FirstLayerArt from "../pics/about-us-pictures/firstLayerArt.png";
import TopLayerArt from "../pics/about-us-pictures/topLayerArt.png";
import PovertyFirst from "../pics/about-us-pictures/povertyFirstLayer.png";

export function AboutUs() {
  return (
    <div>
      <div>
        <img src={MainBg} className={"main-bg-pic"} alt={"mainBg"}/>
      </div>
      <div className={"second-row-box"}>
        <div className={"knowledge-text-box"}>
          <p className={"our-mission"}>OUR MISSION</p>
          <h1 className={"knowledge-power"}>KNOWLEDGE = POWER</h1>
          <p>We're a Norwegian female-founded startup changing corporate giving and the way companies and nonprofits connect.</p>
          <p>We're saving companies resources, help create stable income streams for nonprofits, and create deeper relationships between donor and nonprofit.</p>
          <p> We help implement solid strategies for impactful and sustainable giving, all in line with the UN SDGs.</p>
        </div>
        <div className={"art-box"}>
          <img src={FirstLayerArt} className={"first-layer-art"} alt={"firstLayer"}/>
          <img src={TopLayerArt} className={"top-layer-art"} alt={"topLayer"}/>
          <p className={"our-mission mission"}>OUR MISSION</p>
          <h1 className={"action-call"}>A CALL TO ACTION</h1>
        </div>
      </div>
      <div className={"big-container"}>
        <div className={"small-box light"}>
          <p className={"small-title"}>No poverty</p>
          <p className={"small-txt"}>We are committed to end poverty in all its forms everywhere</p>
        </div>
        <div className={"small-box dark"}>
          <p className={"small-title"}>Zero hunger</p>
          <p className={"small-txt"}>End hunger, achieve food security and improve nutrition and promote sustainable agriculture</p>
        </div>
        <div className={"small-box light"}>
          <p className={"small-title"}>Good health</p>
          <p className={"small-txt"}>Ensure healthy lives and promote well-being for all at all ages</p>
        </div>
        <div className={"small-box light"}>
          <p className={"small-title"}>No poverty</p>
          <p className={"small-txt"}>We are committed to end poverty in all its forms everywhere</p>
        </div>
        <div className={"small-box dark"}>
          <p className={"small-title"}>Zero hunger</p>
          <p className={"small-txt"}>End hunger, achieve food security and improve nutrition and promote sustainable agriculture</p>
        </div>
        <div className={"small-box light"}>
          <p className={"small-title"}>Good health</p>
          <p className={"small-txt"}>Ensure healthy lives and promote well-being for all at all ages</p>
        </div>
      </div>
    </div>
  );
}