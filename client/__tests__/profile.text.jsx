import { Profile } from "../profile";
import ReactDOM from "react-dom";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { ProfileContext } from "../login";
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
    expect(divEl).toMatchSnapshot();
  });
});
