import ReactDOM from "react-dom";
import React, { createElement } from "react";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { Dashboard } from "../pages/dashboard";

describe("Dashboard component", () => {
  it("should test div element", async function () {
    const user = { google: { name: "test name", email: "test email" } };
    const divEl = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Dashboard user={user} />
      </MemoryRouter>,
      divEl
    );
    expect(divEl.innerHTML).toMatchSnapshot();
  });
  it("should show demo dashboard", async function () {
    const user = {
      google: {
        name: "test name",
        email: "test email",
      },
    };

    const element = document.createElement("div");
    await act(async () => {
      ReactDOM.render(
        <MemoryRouter>
          <Dashboard user={user} />
        </MemoryRouter>,
        element
      );
    });

    expect(
      Array.from(element.querySelectorAll("p")).map((e) => e.innerHTML)
    ).toEqual([
      "test name",
      "My donations",
      "My subscriptions",
      "23 <br> donation",
      "5 <br> subscriptions",
      "750 000<br> donated",
      "192 351 <br> Avg per month",
      "25%",
      "Bak gjennomsnittet",
      "Basert på firma <br> sin omsetning",
    ]);
    expect.stringContaining("Profile for test name (test email)");
    expect(element.innerHTML).toMatchInlineSnapshot(
      `"<div class=\\"dashboard-page\\"><div class=\\"dashboard-sidebar\\"><div class=\\"dashboard-pfp-name\\"><img alt=\\"Profile picture\\" class=\\"dashboard-pfp\\"><p>test name</p></div><p>My donations</p><p>My subscriptions</p></div><div class=\\"dashboard-main\\"><div class=\\"dashboard-top-row\\"><div class=\\"dashboard-info-box\\"><p>23 <br> donation</p></div><div class=\\"dashboard-info-box\\"><p>5 <br> subscriptions</p></div><div class=\\"dashboard-info-box\\"><p>750 000<br> donated</p></div></div><div class=\\"dashboard-row-2\\"><h2>Donation over time</h2><div class=\\"chart-wrap\\"><div class=\\"chart2\\"></div><div class=\\"chart2-sidebar\\"><select name=\\"months\\" id=\\"months\\"><option value=\\"january\\">January</option><option value=\\"february\\">February</option><option value=\\"march\\">March</option><option value=\\"april\\">April</option></select><div class=\\"chart2-circle\\"><p>192 351 <br> Avg per month</p></div></div></div></div><div class=\\"dashboard-row-3\\"><h2>Donasjoner</h2><h4>sammenlignet med lignende bedrifter</h4><div class=\\"chart-wrap\\"><div class=\\"chart1\\"></div><div class=\\"chart1-sidebar\\"><div class=\\"chart1-circle\\"><p class=\\"percent-txt\\">25%</p><p class=\\"chart1-circle-txt\\">Bak gjennomsnittet</p></div><div class=\\"chart1-textbox\\"><p>Basert på firma <br> sin omsetning</p></div></div></div></div></div></div>"`
    );
    expect(element.innerHTML).toMatchSnapshot();
  });
});
