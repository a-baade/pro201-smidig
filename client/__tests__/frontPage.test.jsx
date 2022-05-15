import { FrontPage } from "../frontPage";
import React from "react";
import { Link, MemoryRouter } from "react-router-dom";
import ReactDOM from "react-dom";

describe("FrontPage component", () => {
  it("should test  div element", async function () {
    const domEl = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <FrontPage />
      </MemoryRouter>,
      domEl
    );
    expect(domEl.innerHTML).toMatchSnapshot();
  });

  it("should render correctly", function() {
    const linkEl = document.createElement("Link");
    ReactDOM.render(
      <MemoryRouter>
        <Link to={"/login"}>Login</Link>
      </MemoryRouter>,
      linkEl
    );
    expect(linkEl.innerHTML).toMatchSnapshot();
  });

  it("should test text in link element", function () {
    const linkEl = document.createTextNode(/log in/i);
    expect(linkEl).toMatchSnapshot();
  });

  it("should test link element", async function () {
    const linkEl = document.createElement("Link");
    ReactDOM.render(
      <MemoryRouter>
        <FrontPage />
      </MemoryRouter>,
      linkEl
    );
    expect(linkEl.innerHTML).toMatchSnapshot();
  });
});
