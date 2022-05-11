import { act, Simulate } from "react-dom/test-utils";
import ReactDOM from "react-dom";
import React from "react";
import { Login, ProfileContext } from "../login";
import { MemoryRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

describe("Login component", () => {
  it("should redirect to login with google", async function () {
    const location = new URL("https://www.example.com");
    delete window.location;
    window.location = new URL(location);

    const authorization_endpoint = `https://www.example.com/`;
    const client_id = `1095583458734985klshdkajshdlaks.apps.googleusercontent.com`;

    const domElement = document.createElement("div");
    const root = createRoot(domElement);
    root.render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const redirect_uri = `${location.origin}/login/callback`;
    expect(window.location.origin + window.location.pathname).toEqual(
      authorization_endpoint
    );
    const params = Object.fromEntries(
      new URLSearchParams(window.location.search.substring(1))
    );
    expect(params).toMatchSnapshot();
    //expect(params).toMatchObject({ client_id, redirect_uri });
  });
});
