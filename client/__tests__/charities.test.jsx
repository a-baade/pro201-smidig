import React from "react";
import ReactDOM from "react-dom";
import { Charities } from "../pages/charities";
import { act, Simulate } from "react-dom/test-utils";
import { ApiContext } from "../apiContext";
import { BrowserRouter } from "react-router-dom";
import CharityPage from "../pages/charityPage";

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

  it("should show charity page", async function () {
    const charities = [
      { id: 1, name: "Charity 1", description: "Test description 1" },
      { id: 2, name: "Charity 2", description: "Test description 2" },
      { id: 3, name: "Charity 3", description: "Test description 3" },
    ];

    const divElement = document.createElement("div");
    await act(async () => {
      ReactDOM.render(
        <BrowserRouter>
          <ApiContext.Provider value={{ oneCharity: () => charities }}>
            <CharityPage />
          </ApiContext.Provider>
        </BrowserRouter>,
        divElement
      );

      expect(divElement.innerHTML).toMatchSnapshot();
    });
  });
});
