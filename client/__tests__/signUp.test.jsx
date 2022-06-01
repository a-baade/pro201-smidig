import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { SignUp } from "../pages/signUp";

describe("Signup component", () => {
  it("should test signup component", async function () {
    const divEl = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>,
      divEl
    );
    expect(divEl.innerHTML).toMatchSnapshot();
  });
});
