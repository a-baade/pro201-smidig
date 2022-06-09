import React from "react";
import ReactDOM from "react-dom";
import { Charities } from "../pages/charities";
import { act, Simulate } from "react-dom/test-utils";
import { ApiContext } from "../apiContext";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import CharityPage from "../pages/charityPage";

describe("Charities component", () => {
  it("should show loading screen", function () {
    const divElement = document.createElement("div");
    ReactDOM.render(<Charities />, divElement);
    expect(divElement.innerHTML).toMatchSnapshot();
  });

});
