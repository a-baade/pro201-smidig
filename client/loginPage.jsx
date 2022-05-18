import React, { useContext, useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import {ApiContext} from "./apiContext";
import {randomString} from "./lib/randomString";
import Google from "./login-pic/img.png";
import Message from "./login-pic/img_2.png";
import Invisible from "./login-pic/img_4.png";
import Lock from "./login-pic/img_3.png";
import FirstLayer from "./login-pic/login-sidebar/firstlayer.png";
import SecondLayer from "./login-pic/login-sidebar/secondlayer.png";
import TopCorner from "./login-pic/login-sidebar/topcorner.png";
import BottomCorner from "./login-pic/login-sidebar/bottomcorner.png";


export function LoginCallback({ reload, config }) {
  const { provider } = useParams();
  const [error, setError] = useState();
  const navigate = useNavigate();
  const { registerLogin } = useContext(ApiContext);
  useEffect(async () => {
    const { access_token, error, error_description, state, code } =
      Object.fromEntries(
        new URLSearchParams(window.location.hash.substring(1))
      );

    const expected_state = window.sessionStorage.getItem("expected_state");
    if (!state || expected_state !== state) {
      setError("Unexpected state");
      return;
    }

    if (error || error_description) {
      setError(`Error: ${error} (${error_description})`);
      return;
    }

    if (code) {
      const { client_id, token_endpoint } = config[provider];
      const code_verifier = window.sessionStorage.getItem("code_verifier");
      const payload = {
        grant_type: "authorization_code",
        code,
        token_endpoint,
        client_id,
        code_verifier,
      };
      const res = await fetch(token_endpoint, {
        method: "POST",
        body: new URLSearchParams(payload),
      });
      if (!res.ok) {
        setError(`Failed to fetch token ${res.status}: ${await res.text()}`);
        return;
      }
      const { access_token } = await res.json();
      await registerLogin(provider, { access_token });
      reload();
      navigate("/");
      return;
    }

    if (!access_token) {
      setError("Missing access_token");
      return;
    }

    await registerLogin(provider, { access_token });
    reload();
    navigate("/");
  }, []);

  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <div>{error.toString()}</div>
      </div>
    );
  }

  return <h1>Please wait...</h1>;
}

export function EndSession({ reload }) {
  const navigate = useNavigate();
  const { endSession } = useContext(ApiContext);
  useEffect(async () => {
    await endSession();
    reload();
    navigate("/");
  });
  return <h1>Please wait...</h1>;
}

function LoginButton({ config, label, provider }) {
  async function handleLogin() {
    const { authorization_endpoint, response_type, scope, client_id } =
      config[provider];

    const state = randomString(50);
    window.sessionStorage.setItem("expected_state", state);

    const parameters = {
      response_type,
      response_mode: "fragment",
      client_id,
      state,
      scope,
      redirect_uri: `${window.location.origin}/login/${provider}/callback`,
    };

    window.location.href =
      authorization_endpoint + "?" + new URLSearchParams(parameters);
  }

  return (
    <div>
      <img src={Google} className={"google-icon"}/>
      <button className={"google-login-btn"} onClick={handleLogin}>{label}</button>
      <h2 className={"line"}>________________________</h2>
    </div>
  );
}

function StartLogin({ config }) {
  return (
    <div>
      <div className={"login-container"}>
        <div className={"sidebar"}>
          <img src={FirstLayer} className={"first-layer-img"}/>
          <img src={SecondLayer} className={"second-layer-img"}/>
          <img src={TopCorner} className={"top-corner-img"}/>
          <img src={BottomCorner} className={"bottom-corner-img"}/>
        </div>
        <div className={"login-form"}>
          <h1>Get started.</h1>
          <form>
            <LoginButton
              label={"Sign up with Google"}
              config={config}
              provider={"google"}
            />
            <div className={"email-field"}>
              <label className={"login-txt"}>Email address</label>
              <img src={Message} className={"message-icon"}/>
              <input type={"email"} value={"@example.com"} className={"login-txt"}/>
            </div>
            <div>
              <label className={"login-txt"}>Password</label>
              <img src={Lock} className={"lock-icon"}/>
              <img src={Invisible} className={"invisible-icon"}/>
              <input type={"password"} value={"exmplepassword"} className={"login-txt"}/>
            </div>
            <div>
              <label><input type={"checkbox"} className={"checkbox"}/>I agree to Meliora Impacts’s Terms of Service and Privacy Policy</label>
            </div>
           <button className={"sign-in-btn"}>Sign in</button>
            <label className={"sign-up-txt"}>Don´t have an account? Sign up</label>
          </form>
        </div>
      </div>
    </div>
  );
}

export function LoginPage({ config, reload }) {
  return (
    <Routes>
      <Route path={"/"} element={<StartLogin config={config} />} />
      <Route
        path={"/:provider/callback"}
        element={<LoginCallback config={config} reload={reload} />}
      />
      <Route path={"/endsession"} element={<EndSession reload={reload} />} />
      <Route path={"*"} element={<StartLogin config={config} />} />
    </Routes>
  );
}