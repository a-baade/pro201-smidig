import React from "react";


export function Dashboard({ user }) {
  return (
      <div className={"dashboard-page"}>
          <div className={"dashboard-sidebar"}>
              <img src={user.google.picture} alt="Profile picture" className={"pfp"}/>
              <p>{user.google.name}</p>
              <p>My donations</p>
              <p>My subscriptions</p>
          </div>
          <div className={"dashboard-main"}>
              <div className={"dashboard-top-row"}>
                <div className={"dasboard-info-box"}>
                    <p>23 <br/> donation</p>
                </div>
                  <div className={"dasboard-info-box"}>
                      <p>5 <br/> subscriptions</p>
                  </div>
                  <div className={"dasboard-info-box"}>
                      <p>750 000<br/> donated</p>
                  </div>
              </div>
              <div className={"dashboard-row-2"}>
                  <h2>Donation over time</h2>
                  <div className={"over-time-chart"}></div>
                  <div className={"over-time-sidebar"}>
                      <button>Month</button>
                      <div>
                          <p>192 351 <br/> Avg per month</p>
                      </div>
                  </div>
              </div>
              <div className={"dashboard-row-3"}>
                  <h2>Donasjoner</h2>
                  <h4>sammenlignet med lignende bedrifter</h4>
                  <div className={"donations-chart"}></div>
                  <div className={"donations-sidebar"}>
                      <div className={"gjennomsnitt-wrap"}>
                          <h4>25%</h4>
                          <p>Bak gjennomsnittet</p>
                      </div>
                      <div className={"omsetning-wrap"}>
                          <p>Basert på firma sin omsetning</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}