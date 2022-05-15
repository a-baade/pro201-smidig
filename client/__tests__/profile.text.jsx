import { Profile } from "../profile";
import ReactDOM from "react-dom";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

describe("Profile component", () => {
  it("should test div element", async function () {
    const divEl = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>,
      divEl
    );
    expect(divEl.getElementsByTagName("div")).toMatchSnapshot();
  });

  it("should test text in h1 element", function () {
    const h1El = document.createTextNode(/Profile for/i);
    expect(h1El).toMatchSnapshot();
  });

  it("should show demo profile", async function () {
    const user = {google: { name: "test name", email: "test email" }};
    const divEl = document.createElement("div");
    await act(async () => {
      ReactDOM.render(
          <MemoryRouter>
            <Profile user={user}/>
          </MemoryRouter>,
        divEl
      );
    });
    expect(
      Object.values(divEl.querySelectorAll("h3")).map((e) => e.innerHTML)
    ).toEqual(["Name: test name", "Email: test email"]);
    expect(divEl.innerHTML).toMatchSnapshot();
    expect.stringContaining("Profile for test name (test email)");
  });
});
