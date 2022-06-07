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
                <img src={MainBg} className={"main-bg-pic"} alt={"mainBg"} />
            </div>
            <div className={"second-row-box"}>
                <div className={"knowledge-text-box"}>
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
            <p className={"our-mission mission"}>OUR MISSION</p>
            <h1 className={"action-call custom-font-knowledge"}>A CALL TO ACTION</h1>
            <div className={"big-container"}>
                <div className={"small-box light custom-shadow"}>
                    <img src={Book} className={"graphics"} />
                    <p className={"small-title "}>Quality education</p>
                    <p className={"small-txt"}>
                      Ensure inclusive and equitable quality education and promote
                      lifelong learning opportunities for all
                    </p>
                </div>
                <div className={"small-box light custom-shadow"}>
                    <img src={Water} className={"graphics"} />
                    <p className={"small-title "}>Clean water & sanitation</p>
                    <p className={"small-txt"}>
                        Ensure availability and sustainable management of water and
                        sanitation for all
                    </p>
                </div>
                <div className={"small-box light custom-shadow"}>
                    <img src={Sustainability} className={"graphics"} />
                    <p className={"small-title custom-font-knowledge"}>Subsainable cities & communinites</p>
                    <p className={"small-txt"}>
                        Make cities and human settlements inclusive, safe, resilient and
                        sustainable
                    </p>
                </div>
                <div className={"small-box dark custom-shadow"}>
                    <img src={Consumption} className={"graphics"} />
                    <p className={"small-title custom-font-knowledge"}>Responsible consumption & production</p>
                    <p className={"small-txt"}>
                        Ensure sustainable consumption and production patterns
                    </p>
                </div>
                <div className={"small-box light custom-shadow"}>
                    <img src={ClimateAction} className={"graphics"} />
                    <p className={"small-title custom-font-knowledge"}>Climate action</p>
                    <p className={"small-txt"}>
                        Take urgent action to combat climate change and its impacts
                    </p>
                </div>
                <div className={"small-box dark custom-shadow"}>
                    <img src={Whale} className={"graphics"} />
                    <p className={"small-title custom-font-knowledge"}>Life below water</p>
                    <p className={"small-txt"}>
                        Conserve and sustainably use the oceans, seas and marine resources
                        for sustainable development
                    </p>
                </div>
                <div className={"small-box light custom-shadow"}>
                    <img src={Cow} className={"graphics"} />
                    <p className={"small-title custom-font-knowledge"}>Life on land</p>
                    <p className={"small-txt"}>
                        Protect, restore and promote sustainable use of terrestrial
                        ecosystems, sustainably manage forests, combat desertification, and
                        halt and reverse land degradation and halt biodiversity loss
                    </p>
                </div>
                <div className={"small-box dark custom-shadow"}>
                    <img src={Flower} className={"graphics"} />
                    <p className={"un-goals-title custom-font-knowledge"}>THE UN SDG GOALS</p>
                </div>
            </div>
        </div>
    );
}
