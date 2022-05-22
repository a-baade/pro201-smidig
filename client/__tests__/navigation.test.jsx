import React from "react";
import ReactDOM from "react-dom";
import { Link, MemoryRouter } from "react-router-dom";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

describe("Navigation and Footer components", () => {
  it("should test navigation", function() {
    const divEl = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Navigation/>
      </MemoryRouter>,
      divEl
    );
    expect(divEl.innerHTML).toMatchSnapshot();
  });

  it("should test Link", function() {
    const link = document.createElement("Link");
    ReactDOM.render(
      <MemoryRouter>
        <Link to={"/about"} className={ "navLinks" }>About us</Link>
      </MemoryRouter>,
      link
    );
    expect(link.innerHTML).toMatchSnapshot();
  });

  it("should test footer", function() {
    const divEl = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Footer/>
      </MemoryRouter>,
      divEl
    );
    expect(divEl.innerHTML).toMatchSnapshot();
  });

})