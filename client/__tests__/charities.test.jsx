import React from "react";
import ReactDOM from "react-dom";
import { Charities } from "../pages/charities";
import CharityPage, { Charity } from "../pages/charityPage";
import { act } from "react-dom/test-utils";
import { ApiContext } from "../apiContext";
import { BrowserRouter, MemoryRouter, Router } from "react-router-dom";

describe("Charities component", () => {
  it("should show loading screen", function () {
    const divElement = document.createElement("div");
    ReactDOM.render(<Charities />, divElement);
    expect(divElement.innerHTML).toMatchSnapshot();
  });

  it("should show error message", async function () {
    const divElement = document.createElement("div");
    await act(async () => {
      const allCharities = () => {
        throw new Error("Failed to load");
      };
      ReactDOM.render(
        <ApiContext.Provider value={{ allCharities }}>
          <Charities />
        </ApiContext.Provider>,
        divElement
      );
    });
    expect(divElement.querySelector("#error-text").innerHTML).toEqual(
      "Error: Failed to load"
    );
    expect(divElement.innerHTML).toMatchSnapshot();
  });

  it("should show all charities", async function () {
    const charities = [
      { name: "Charity 1", description: "Test description 1" },
      { name: "Charity 2", description: "Test description 2" },
      { name: "Charity 3", description: "Test description 3" },
    ];
    const divElement = document.createElement("div");
    await act(async () => {
      ReactDOM.render(
        <BrowserRouter>
          <ApiContext.Provider value={{ allCharities: () => charities }}>
            <Charities />
          </ApiContext.Provider>
        </BrowserRouter>,
        divElement
      );
    });
    expect(
      Array.from(divElement.querySelectorAll("h3")).map((e) => e.innerHTML)
    ).toEqual(["Charity 1", "Charity 2", "Charity 3"]);
    expect(
      Array.from(divElement.querySelectorAll("p")).map((e) => e.innerHTML)
    ).toEqual([
      "Test description 1",
      "Test description 2",
      "Test description 3",
    ]);
    expect(divElement.innerHTML).toMatchSnapshot();
  });

  it("should test charityPage", async function () {
    const charities = {
      charities: { name: "Charity 1", description: "Test description 1" },
    };
    const divElement = document.createElement("div");
    await act(async () => {
      ReactDOM.render(
        <MemoryRouter>
          <CharityPage />
        </MemoryRouter>,
        divElement
      );
    });
    expect(divElement.innerHTML).toMatchSnapshot();
  });
});
