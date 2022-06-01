import React, { createElement } from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import Donate, { DonateModule } from "../pages/donate";
import { act } from "react-dom/test-utils";

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

  it("should test donate module", async function () {
    const charities = {
      _id: 1,
      name: "Charity 1",
      description: "Test description 1",
    };
    const element = document.createElement("div");
    await act(async () => {
      ReactDOM.render(
        <MemoryRouter>
          <DonateModule charity={charities} />
        </MemoryRouter>,
        element
      );
    });

    expect(
      Object.values(element.querySelectorAll("h2")).map((e) => e.innerHTML)
    ).toEqual(["Donate to Charity 1"]);
    expect(element.innerHTML).toMatchSnapshot();
    expect.stringContaining("Donate to Charity 1");
  });
});
