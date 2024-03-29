import React from "react";
import MainBg from "../pics/about-us-pictures/main-bg.png";
import FirstLayerArt from "../pics/about-us-pictures/firstLayerArt.png";
import TopLayerArt from "../pics/about-us-pictures/topLayerArt.png";
import Water from "../pics/graphics/water.png";
import Book from "../pics/graphics/book.png";
import Cow from "../pics/graphics/cow.png";
import Whale from "../pics/graphics/whale.png";
import ClimateAction from "../pics/graphics/climate-action.png";
import Sustainability from "../pics/graphics/sustainability.png";
import Consumption from "../pics/graphics/consumption.png";
import Flower from "../pics/graphics/flower.png";

export function AboutUs() {
    return (
        <div>
            <div>
                <img src={MainBg} className={"main-bg-pic"} alt={"mainBg"}/>
            </div>
            <div className={"second-row-box"}>
                <div className={"knowledge-text-box custom-shadow"}>
                    <p className={"our-mission"}>OUR MISSION</p>
                    <h1 className={"knowledge-power custom-font-knowledge"}>KNOWLEDGE = POWER</h1>
                    <div className={"power-text"}>
                        <p>
                            We're a Norwegian female-founded startup changing corporate giving
                            and the way companies and nonprofits connect.
                        </p>
                        <p>
                            We're saving companies resources, help create stable income
                            streams for nonprofits, and create deeper relationships between
                            donor and nonprofit.
                        </p>
                        <p>
                            {" "}
                            We help implement solid strategies for impactful and sustainable
                            giving, all in line with the UN SDGs.
                        </p>
                    </div>
                </div>
                <div className={"art-box"}>
                    <img
                        src={FirstLayerArt}
                        className={"first-layer-art"}
                        alt={"firstLayer"}
                    />
                    <img
                        src={TopLayerArt}
                        className={"top-layer-art"}
                        alt={"topLayer"}
                    />
                </div>
            </div>
            <div className={"ourMission-txt"}>
                <p className={"our-mission mission"}>OUR MISSION</p>
                <h1 className={"action-call custom-font-knowledge"}>A CALL TO ACTION</h1>
            </div>
            <div className={"big-container"}>
                <a href={"https://sdgs.un.org/goals/goal4"} className={"un-link"}>
                    <div className={"small-box light custom-shadow"}>
                        <img src={Book} alt="book" className={"graphics"}/>
                        <p className={"small-title "}>Quality education</p>
                        <p className={"small-txt"}>
                            Ensure inclusive and equitable quality education and promote
                            lifelong learning opportunities for all
                        </p>
                    </div>
                </a>
                <a href={"https://sdgs.un.org/goals/goal6"} className={"un-link"}>
                    <div className={"small-box dark custom-shadow"}>
                        <img src={Water} alt="water" className={"graphics"}/>
                        <p className={"small-title "}>Clean water & sanitation</p>
                        <p className={"small-txt"}>
                            Ensure availability and sustainable management of water and
                            sanitation for all
                        </p>
                    </div>
                </a>
                <a href={"https://sdgs.un.org/goals/goal11"} className={"un-link"}>
                    <div className={"small-box light custom-shadow"}>
                        <img src={Sustainability} alt="sustainability" className={"graphics"}/>
                        <p className={"small-title "}>Sustainable cities & communities</p>
                        <p className={"small-txt"}>
                            Make cities and human settlements inclusive, safe, resilient and
                            sustainable
                        </p>
                    </div>
                </a>
                <a href={"https://sdgs.un.org/goals/goal12"} className={"un-link"}>
                    <div className={"small-box dark custom-shadow"}>
                        <img src={Consumption} alt="consumption" className={"graphics"}/>
                        <p className={"small-title "}>Responsible consumption & production</p>
                        <p className={"small-txt"}>
                            Ensure sustainable consumption and production patterns
                        </p>
                    </div>
                </a>
                <a href={"https://sdgs.un.org/goals/goal13"} className={"un-link"}>
                    <div className={"small-box light custom-shadow"}>
                        <img src={ClimateAction} alt="climateAction" className={"graphics"}/>
                        <p className={"small-title "}>Climate action</p>
                        <p className={"small-txt"}>
                            Take urgent action to combat climate change and its impacts
                        </p>
                    </div>
                </a>
                <a href={"https://sdgs.un.org/goals/goal14"} className={"un-link"}>
                    <div className={"small-box dark custom-shadow"}>
                        <img src={Whale} alt="whale" className={"graphics"}/>
                        <p className={"small-title "}>Life below water</p>
                        <p className={"small-txt"}>
                            Conserve and sustainably use the oceans, seas and marine resources
                            for sustainable development
                        </p>
                    </div>
                </a>
                <a href={"https://sdgs.un.org/goals/goal15"} className={"un-link"}>
                    <div className={"small-box light custom-shadow"}>
                        <img src={Cow} alt="cow" className={"graphics"}/>
                        <p className={"small-title "}>Life on land</p>
                        <p className={"small-txt"}>
                            Protect, restore and promote sustainable use of terrestrial
                            ecosystems, sustainably manage forests, combat desertification, and
                            halt and reverse land degradation and halt biodiversity loss
                        </p>
                    </div>
                </a>
                <a href={"https://sdgs.un.org/goals"} className={"un-link"}>
                    <div className={"small-box dark custom-shadow"}>
                        <img src={Flower} alt="flower" className={"graphics"}/>
                        <p className={"small-title"}>THE UN SDG GOALS</p>
                    </div>
                </a>
            </div>
        </div>
    );
}
