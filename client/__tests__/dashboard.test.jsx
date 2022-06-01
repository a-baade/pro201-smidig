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
    expect(element.innerHTML).toMatchSnapshot();
  });
});
