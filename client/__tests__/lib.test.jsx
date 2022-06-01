import React from "react";
import ReactDOM from "react-dom";
import { Link, MemoryRouter } from "react-router-dom";
import { FormInput, FormInputPassword } from "../lib/formInput";

describe("FormInput and FormPassword components", () => {
  it("should test form input", function () {
    const element = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <FormInput />
      </MemoryRouter>,
      element
    );
    expect(element.innerHTML).toMatchInlineSnapshot(
      `"<div class=\\"form-input\\"><label><strong></strong> <input value=\\"\\"></label></div>"`
    );
    expect(element.innerHTML).toMatchSnapshot();
  });

  it("should test form password", function () {
    const element = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <FormInputPassword />
      </MemoryRouter>,
      element
    );
    expect(element.innerHTML).toMatchInlineSnapshot(
      `"<div class=\\"form-input\\"><label><strong></strong> <input type=\\"password\\" value=\\"\\"></label></div>"`
    );
    expect(element.innerHTML).toMatchSnapshot();
  });
});
