import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Application } from "../application";
import { FrontPage } from "../pages/frontPage";

describe("Application component", () => {
  it("should test div element", async function() {
    const divEl = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Application/>
      </MemoryRouter>,
      divEl
    );
    expect(divEl.innerHTML).toMatchSnapshot();
  });

  it("should test header", async function() {
    const header = document.createElement("header");
    ReactDOM.render(
      <MemoryRouter>
        <Application/>
      </MemoryRouter>,
      header
    );
    expect(header.innerHTML).toMatchSnapshot();
  });

  it("should test Route", async function() {
    const route = document.createElement("Route");
    ReactDOM.render(
      <MemoryRouter>
        <Routes>
          <Route path={"/"} element={<FrontPage />} />
        </Routes>
      </MemoryRouter>,
      route
    );
    expect(route.innerHTML).toMatchSnapshot();
  });
})