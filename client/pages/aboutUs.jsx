import React from "react";
import MainBg from "../pics/about-us-pictures/main-bg.png";
import FirstLayerArt from "../pics/about-us-pictures/firstLayerArt.png";
import TopLayerArt from "../pics/about-us-pictures/topLayerArt.png";
import PovertyFirst from "../pics/about-us-pictures/povertyFirstLayer.png";
import PovertySecond from "../pics/about-us-pictures/povertytopLayer.png";
import ZeroHunger from "../pics/about-us-pictures/zeroHungerFirst.png";
import ZeroHungerTop from "../pics/about-us-pictures/seroHungerTop.png";
import GoodHealthFirst from "../pics/about-us-pictures/goodHealthFirst.png";
import GoodHealthTop from "../pics/about-us-pictures/goodHealthTop.png";
import QualityEducation from "../pics/about-us-pictures/qualityEducation.png";
import QualityEducationTop from "../pics/about-us-pictures/qualityEducationTop.png";
import GenderEquality from "../pics/about-us-pictures/genderEqualityFirst.png";
import GenderEqualityTop from "../pics/about-us-pictures/genderEqualityTop.png";

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
          <img src={PovertyFirst} className={"poverty-first"}/>
          <img src={PovertySecond} className={"poverty-second"}/>
        </div>
        <div className={"small-box dark"}>
          <p className={"small-title"}>Zero hunger</p>
          <p className={"small-txt"}>End hunger, achieve food security and improve nutrition and promote sustainable agriculture</p>
          <img src={ZeroHunger} className={"zero-hunger"}/>
          <img src={ZeroHungerTop} className={"zero-hunger-top"}/>
        </div>
        <div className={"small-box light"}>
          <img src={GoodHealthFirst} className={"good-health"}/>
          <img src={GoodHealthTop} className={"good-health-top"}/>
          <p className={"small-title good-health-title"}>Good health</p>
          <p className={"small-txt good-health-txt"}>Ensure healthy lives and promote well-being for all at all ages</p>
        </div>
        <div className={"small-box light"}>
          <p className={"small-title"}>Quality education</p>
          <p className={"small-txt"}>Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all</p>
          <img src={QualityEducation} className={"quality-education"}/>
          <img src={QualityEducationTop} className={"quality-education-top"}/>
        </div>
        <div className={"small-box dark"}>
          <img src={GenderEquality} className={"gender-equality"}/>
          <img src={GenderEqualityTop} className={"gender-equality-top"}/>
          <p className={"small-title gender-eql-title"}>Gender equality</p>
          <p className={"small-txt gender-eql-txt"}>Achieve gender equality and empower all women and girls</p>
        </div>
        <div className={"small-box light"}>
          <p className={"small-title"}>Clean water & sanitation</p>
          <p className={"small-txt"}>Ensure availability and sustainable management of water and sanitation for all</p>
          <img src={ZeroHunger} className={"zero-hunger"}/>
          <img src={ZeroHungerTop} className={"zero-hunger-top"}/>
        </div>
        <div className={"small-box light"}>
          <p className={"small-title"}>Affordable & clean energy</p>
          <p className={"small-txt"}>Ensure access to affordable, reliable, sustainable and modern energy for all</p>
          <img src={PovertyFirst} className={"poverty-first"}/>
          <img src={PovertySecond} className={"poverty-second"}/>
        </div>
        <div className={"small-box light"}>
          <p className={"small-title"}>Decent work & economic growth</p>
          <p className={"small-txt"}>Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all</p>
          <img src={ZeroHunger} className={"decent-work"}/>
          <img src={ZeroHungerTop} className={"decent-work-top"}/>
        </div>
        <div className={"small-box light"}>
          <p className={"small-title"}>Industry, innovation & infrastructure</p>
          <p className={"small-txt"}>Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation</p>
          <img src={PovertyFirst} className={"industry"}/>
          <img src={PovertySecond} className={"industry-second"}/>
        </div>
        <div className={"small-box dark"}>
          <p className={"small-title"}>Reduce inequalities</p>
          <p className={"small-txt"}>Reduce inequality within and among countries</p>
          <img src={ZeroHunger} className={"zero-hunger"}/>
          <img src={ZeroHungerTop} className={"zero-hunger-top"}/>
        </div>
        <div className={"small-box light"}>
          <p className={"small-title"}>Subsainable cities & communinites</p>
          <p className={"small-txt"}>Make cities and human settlements inclusive, safe, resilient and sustainable</p>
          <img src={PovertyFirst} className={"poverty-first"}/>
          <img src={PovertySecond} className={"poverty-second"}/>
        </div>
        <div className={"small-box dark"}>
          <p className={"small-title"}>responsible consumption & production</p>
          <p className={"small-txt"}>Ensure sustainable consumption and production patterns</p>
          <img src={ZeroHunger} className={"zero-hunger"}/>
          <img src={ZeroHungerTop} className={"zero-hunger-top"}/>
        </div>
        <div className={"small-box light"}>
          <p className={"small-title"}>Climate action</p>
          <p className={"small-txt"}>Take urgent action to combat climate change and its impacts</p>
          <img src={PovertyFirst} className={"poverty-first"}/>
          <img src={PovertySecond} className={"poverty-second"}/>
        </div>
        <div className={"small-box dark"}>
          <p className={"small-title"}>Life below water</p>
          <p className={"small-txt"}>Conserve and sustainably use the oceans, seas and marine resources for sustainable development</p>
          <img src={ZeroHunger} className={"zero-hunger"}/>
          <img src={ZeroHungerTop} className={"zero-hunger-top"}/>
        </div>
        <div className={"small-box light"}>
          <p className={"small-title"}>Life on land</p>
          <p className={"small-txt"}>Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss</p>
          <img src={PovertyFirst} className={"life-first"}/>
          <img src={PovertySecond} className={"life-second"}/>
        </div>
        <div className={"small-box dark"}>
          <p className={"small-title"}>Peace, justice & strong institution</p>
          <p className={"small-txt"}>Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels</p>
          <img src={ZeroHunger} className={"peace-first"}/>
          <img src={ZeroHungerTop} className={"peace-top"}/>
        </div>
        <div className={"small-box light"}>
          <p className={"small-title"}>Partnerships for the goals</p>
          <p className={"small-txt"}>Strengthen the means of implementation and revitalize the global partnership for sustainable development</p>
          <img src={PovertyFirst} className={"partnership-first"}/>
          <img src={PovertySecond} className={"partnership-second"}/>
        </div>

        <div className={"small-box dark"}>
          <img src={ZeroHunger} className={"un-goals-first"}/>
          <img src={ZeroHungerTop} className={"un-goals-top"}/>
          <p className={"un-goals-title"}>THE UN SDG GOALS</p>
        </div>
      </div>
    </div>
  );
}