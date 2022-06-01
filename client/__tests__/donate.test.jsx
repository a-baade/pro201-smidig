import React, { createElement } from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import Donate from "../pages/donate";

describe("contact component", () => {
  it("should test div element", async function () {
    const divElement = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Donate />
      </MemoryRouter>,
      divElement
    );
    expect(divElement.innerHTML).toMatchSnapshot();
  });
});
