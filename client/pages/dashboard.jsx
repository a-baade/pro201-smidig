import React from "react";
import { Chart2 } from "../components/charts";
import { Chart1 } from "../components/charts";
import Carousel from "../components/carousel";
import {CarouselCard, DonationsCard} from "../components/carousel";

export function Dashboard({ user }) {
  return (
      <div className={"dashboard-page"}>
          <div className={"dashboard-sidebar"}>
              <div className={"dashboard-pfp-name"}>
                  <img src={user.google.picture} alt="Profile picture" className={"dashboard-pfp"}/>
                  <p>{user.google.name}</p>
              </div>
              <a href="#subscriptions-a" className={"dash-link"}>My Subscriptions</a>
              <a href="#donations-a" className={"dash-link"}>My Donations</a>
          </div>
          <div className={"dashboard-main"}>
              <div className={"dashboard-top-row"}>
                <div className={"dashboard-info-box"}>
                    <p>23 <br/> donation</p>
                </div>
                  <div className={"dashboard-info-box"}>
                      <p>5 <br/> subscriptions</p>
                  </div>
                  <div className={"dashboard-info-box"}>
                      <p>750 000<br/> donated</p>
                  </div>
              </div>
              <div className={"dashboard-row-2"}>
                  <h2>Donation over time</h2>
                  <div className={"chart-wrap"}>
                      <div className={"chart2"}>
                          <Chart2/>
                      </div>
                      <div className={"chart2-sidebar"}>
                          <select name="months" id="months">
                              <option value="january">January</option>
                              <option value="february">February</option>
                              <option value="march">March</option>
                              <option value="april">April</option>
                          </select>
                          <div className={"chart2-circle"}>
                              <p>192 351 <br/> Avg per month</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className={"dashboard-row-3"}>
                  <h2>Donasjoner</h2>
                  <h4>sammenlignet med lignende bedrifter</h4>
                  <div className={"chart-wrap"}>
                      <div className={"chart1"}>
                          <Chart1/>
                      </div>
                      <div className={"chart1-sidebar"}>
                          <div className={"chart1-circle"}>
                              <p className={"percent-txt"}>25%</p>
                              <p className={"chart1-circle-txt"}>Bak gjennomsnittet</p>
                          </div>
                          <div className={"chart1-textbox"}>
                              <p>Basert på firma <br/> sin omsetning</p>
                          </div>
                      </div>
                  </div>
              </div>
              <a id={"subscriptions-a"}></a>
              <div className={"dashboard-row-4"}>
                  <h2>My subscriptions</h2>

                  <div className={"dash-carousel-wrapper"}>
                      <Carousel show={3}>
                          <div>
                              <div className={"card-wrap"}>
                                  <CarouselCard/>
                              </div>
                          </div>
                          <div>
                              <div className={"card-wrap"}>
                                  <CarouselCard/>
                              </div>
                          </div>
                          <div>
                              <div className={"card-wrap"}>
                                  <CarouselCard/>
                              </div>
                          </div>
                          <div>
                              <div className={"card-wrap"}>
                                  <CarouselCard/>
                              </div>
                          </div>
                          <div>
                              <div className={"card-wrap"}>
                                  <CarouselCard/>
                              </div>
                          </div>
                      </Carousel>
                  </div>
              </div>
              <a id={"donations-a"}></a>
              <div className={"dashboard-row-5"}>
                  <h2>Previous donations</h2>
                  <div className={"dash-carousel-wrapper"}>
                      <Carousel show={3}>
                          <div>
                              <div className={"card-wrap"}>
                                  <DonationsCard/>
                              </div>
                          </div>
                          <div>
                              <div className={"card-wrap"}>
                                  <DonationsCard/>
                              </div>
                          </div>
                          <div>
                              <div className={"card-wrap"}>
                                  <DonationsCard/>
                              </div>
                          </div>
                          <div>
                              <div className={"card-wrap"}>
                                  <DonationsCard/>
                              </div>
                          </div>
                          <div>
                              <div className={"card-wrap"}>
                                  <DonationsCard/>
                              </div>
                          </div>
                          <div>
                              <div className={"card-wrap"}>
                                  <DonationsCard/>
                              </div>
                          </div>
                      </Carousel>
                  </div>
              </div>
          </div>
      </div>
  );
}