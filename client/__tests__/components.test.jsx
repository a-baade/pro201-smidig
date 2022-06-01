import React from "react";
import ReactDOM from "react-dom";
import { Link, MemoryRouter } from "react-router-dom";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { Chart1, Chart2 } from "../components/charts";

describe("Navigation and Footer components", () => {
  it("should test navigation", function () {
    const divEl = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
      divEl
    );
    expect(divEl.innerHTML).toMatchSnapshot();
  });

  it("should test Link", function () {
    const link = document.createElement("Link");
    ReactDOM.render(
      <MemoryRouter>
        <Link to={"/about"} className={"navLinks"}>
          About us
        </Link>
      </MemoryRouter>,
      link
    );
    expect(link.innerHTML).toMatchSnapshot();
  });

  it("should test div element of footer", function () {
    const divEl = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
      divEl
    );
    expect(divEl.innerHTML).toMatchSnapshot();
  });

  it("should test footer element", function () {
    const footerEl = document.createElement("footer");
    ReactDOM.render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
      footerEl
    );
    expect(footerEl.innerHTML).toMatchSnapshot();
  });

  it("should test chart1", function () {
    const element = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Chart1 />
      </MemoryRouter>,
      element
    );
    expect(element.innerHTML).toMatchSnapshot();
  });

  it("should test chart2", function () {
    const element = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Chart2 />
      </MemoryRouter>,
      element
    );
    expect(element.innerHTML).toMatchSnapshot();
  });
});
