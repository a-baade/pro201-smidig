import React, { createElement } from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { Contact } from "../pages/contact";

describe("contact component", () => {
  it("should test div element", async function () {
    const divElement = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>,
      divElement
    );
    expect(divElement.innerHTML).toMatchSnapshot();
  });
});
