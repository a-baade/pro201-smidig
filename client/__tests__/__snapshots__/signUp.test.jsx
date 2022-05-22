import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { SignUp } from "../../pages/signUp";
import { act, Simulate } from "react-dom/test-utils";
import { ApiContext } from "../../apiContext";

describe("Sign up component", () => {
  it("should test div element", async function() {
    const divEl = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <SignUp/>
      </MemoryRouter>,
      divEl
    );
    expect(divEl.innerHTML).toMatchSnapshot();
  });
  it("should redirect with google button", async function() {
    const location = new URL("https://www.example.com");
    delete window.location;
    window.location = new URL(location);

    const authorization_endpoint = `https://foo.example.com/auth`;
    const client_id = `1095583458734985klshdkajshdlaks.apps.googleusercontent.com`;

    const divElement = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <SignUp config={{
          google: { authorization_endpoint, client_id },
        }} />
      </MemoryRouter>,
      divElement
    );

    await act(async () => {
      await Simulate.click(divElement.querySelector("button"));
    });
    const redirect_uri = `${location.origin}/login/google/callback`;
    expect(window.location.origin + window.location.pathname).toEqual(
      authorization_endpoint
    );
    const params = Object.fromEntries(
      new URLSearchParams(window.location.search.substring(1))
    );
    expect(params).toMatchObject({ client_id, redirect_uri });
  });

})