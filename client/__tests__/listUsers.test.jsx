import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { ListUsers } from "../pages/listUsers";

describe("list users component", () => {
  it("should test list users component", async function () {
    const divEl = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <ListUsers />
      </MemoryRouter>,
      divEl
    );
    expect(divEl.innerHTML).toMatchSnapshot();
  });
});
