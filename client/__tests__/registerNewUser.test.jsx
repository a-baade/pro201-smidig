import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { RegisterNewUser } from "../pages/registerNewUser";

describe("Register new user component", () => {
  it("should test div element", async function() {
    const divEl = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <RegisterNewUser/>
      </MemoryRouter>,
      divEl
    );
    expect(divEl.innerHTML).toMatchSnapshot();
  });
})