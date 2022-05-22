import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { AboutUs } from "../pages/aboutUs";

describe("About us component", () => {
  it("should test div element", async function() {
    const divEl = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <AboutUs/>
      </MemoryRouter>,
      divEl
    );
    expect(divEl.innerHTML).toMatchSnapshot();
  });

  it("should test p element", function() {
    const pEl = document.createElement("p");
    ReactDOM.render(
      <MemoryRouter>
        <p>OUR MISSION</p>
      </MemoryRouter>,
      pEl
    );
    expect(pEl.innerHTML).toContain("<p>OUR MISSION</p>");
    expect(pEl.innerHTML).toMatchSnapshot();
  });
});