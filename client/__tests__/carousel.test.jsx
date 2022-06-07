import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { CarouselCard } from "../components/carousel";

describe("Carousel component", () => {
  it("should test carousel component", async function () {
    const divEl = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <CarouselCard />
      </MemoryRouter>,
      divEl
    );
    expect(divEl.innerHTML).toMatchSnapshot();
  });
});
