import { FrontPage } from "../frontPage";
import React from "react";
import { Link, MemoryRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

describe("FrontPage component", () => {
  it("should test  div element", async function () {
    const domEl = document.createElement("div");
    const root = createRoot(domEl);
    root.render(
      <MemoryRouter>
        <FrontPage />
      </MemoryRouter>
    );
    expect(domEl.innerHTML).toMatchSnapshot();
  });

  it("should render correctly", function() {
    const linkEl = document.createElement("Link");
    const root = createRoot(linkEl);
    root.render(
      <MemoryRouter>
        <Link to={"/login"}>Login</Link>
      </MemoryRouter>
    );
    expect(linkEl.innerHTML).toMatchSnapshot();
  });

  it("should test text in link element", function () {
    const linkEl = document.createTextNode(/log in/i);
    expect(linkEl).toMatchSnapshot();
  });

  it("should test link element", async function () {
    const linkEl = document.createElement("Link");
    const root = createRoot(linkEl);
    root.render(
      <MemoryRouter>
        <FrontPage />
      </MemoryRouter>
    );
    expect(linkEl.innerHTML).toMatchSnapshot();
  });
});
