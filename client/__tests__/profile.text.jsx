import { Profile } from "../profile";
import ReactDOM from "react-dom";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { ProfileContext } from "../loginPage";
import { act } from "react-dom/test-utils";

describe("Profile component", () => {
  it("should test div element", async function () {
    const divEl = document.createElement("div");
    const root = createRoot(divEl);
    root.render(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    );
    expect(divEl.getElementsByTagName("div")).toMatchSnapshot();
  });

  it("should test text in h1 element", function () {
    const h1El = document.createTextNode(/Profile for/i);
    expect(h1El).toMatchSnapshot();
  });

  it("should show demo profile", async function () {
    const userinfo = {
      userinfo: { name: "test name", email: "test email" },
    };
    const divEl = document.createElement("div");
    const root = createRoot(divEl);
    await act(async () => {
      root.render(
        <ProfileContext.Provider value={{ userinfo: () => userinfo }}>
          <Profile />
        </ProfileContext.Provider>
      );
    });
    expect(
      Object.values(divEl.querySelectorAll("h1")).map((e) => e.innerHTML)
    ).toEqual(["Profile for userinfo ()"]);
    expect(divEl.innerHTML).toMatchSnapshot();
    expect.stringContaining("Profile for test name (test email)");
  });
});
