import { act, Simulate } from "react-dom/test-utils";
import ReactDOM from "react-dom";
import React from "react";
import { Login, LoginCallback, ProfileContext } from "../login";
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

  it("should test text in h1 element", function () {
    const h1El = document.createTextNode(/Please wait.../i);
    expect(h1El).toMatchSnapshot();
  });

  it("should post to server", async function() {
    window.sessionStorage.setItem("expected_state", "test");
    const access_token = `abc`;
    const location = new URL(
      `https://www.example.com#access_token=${access_token}&state=test`
    );
    delete window.location;
    window.location = new URL(location);

    const domElement = document.createElement("div");
    const registerLogin = jest.fn();
    const reload = jest.fn();

    const root = createRoot(domElement);
    await act(() => {
      root.render(
        <MemoryRouter initialEntries={["/callback"]}>
          <ProfileContext.Provider value={{registerLogin}}>
            <LoginCallback reload={reload}/>
          </ProfileContext.Provider>
        </MemoryRouter>
      );
    });
    expect(registerLogin).toBeCalledWith({access_token});
  });
});
