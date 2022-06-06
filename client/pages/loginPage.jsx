import React, { useContext, useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { ApiContext } from "../apiContext";
import { randomString } from "../lib/randomString";
import Google from "../pics/sign-up-pic/img.png";
import Message from "../pics/sign-up-pic/img_2.png";
import Lock from "../pics/sign-up-pic/img_3.png";
import { SignUp } from "./signUp";
import FirstLayer from "../pics/sign-in/firstLayer.png";
import SecondLayer from "../pics/sign-in/secondLayeer.png";
import ThirdLayer from "../pics/sign-in/thirdLayer.png";
import LoadingWheel from "../components/loadingSpinner";

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

  return <LoadingWheel/>;
}

export function EndSession({ reload }) {
  const navigate = useNavigate();
  const { endSession } = useContext(ApiContext);
  useEffect(async () => {
    await endSession();
    reload();
    navigate("/");
  });
  return <LoadingWheel/>;
}

export function LoginButton({ config, label, provider }) {
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
      <img src={Google} className={"google-icon"} alt={"googleIcon"} />
      <button className={"google-login-btn"} onClick={handleLogin}>
        {label}
      </button>
      <h2 className={"line"}></h2>
    </div>
  );
}

function StartLogin({ config }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const result = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "content-type": "application/json",
      },
    });
    if (result.ok) {
      navigate("/");
    } else {
      setError("Login failed");
    }
  }

  return (
    <div className={"page-margin"}>
      <div className={"login-container"}>
        <div className={"sidebar"}>
          <img src={FirstLayer} className={"first-layer-login"} />
          <img src={SecondLayer} className={"second-layer-login"} />
          <img src={ThirdLayer} className={"third-layer-login"} />
        </div>
        <div className={"login-form"}>
          <h1>The future is NOW.</h1>

          <LoginButton
            label={"Sign in with Google"}
            config={config}
            provider={"google"}
          />
          <form onSubmit={handleSubmit}>
            <div className={"email-field"}>
              <label className={"login-txt"}>Email address</label>
              <img src={Message} className={"message-icon"} alt={"msgIcon"} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={"email@address.com"}
                className={"login-txt"}
                name={"email"}
              />
            </div>
            <div>
              <label className={"login-txt"}>Password</label>
              <img src={Lock} className={"lock-icon"} alt={"lockIcon"} />
              <input
                type={"password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={"login-txt"}
                placeholder={"*************"}
                name={"password"}
              />
            </div>
            <div>{error && <div>{error}</div>}</div>
            <button className={"sign-in-btn"}>Sign in</button>
            <label className={"sign-up-txt"}>
              Don´t have an account? <Link to={"/signup"}>Sign up</Link>{" "}
            </label>
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
      <Route path={"/signup"} element={<SignUp config={config} />} />
      <Route
        path={"/:provider/callback"}
        element={<LoginCallback config={config} reload={reload} />}
      />
      <Route path={"/endsession"} element={<EndSession reload={reload} />} />
      <Route path={"*"} element={<StartLogin config={config} />} />
    </Routes>
  );
}
