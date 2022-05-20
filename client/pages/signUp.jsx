import React, { useEffect, useState } from "react";
import Message from "../pics/sign-up-pic/img_2.png";
import Lock from "../pics/sign-up-pic/img_3.png";
import Invisible from "../pics/sign-up-pic/img_4.png";
import {LoginButton} from "./loginPage";
import { Link } from "react-router-dom";

export function SignUp({ config }) {

  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  useEffect(() => {
    localStorage.setItem("email", JSON.stringify(email));
  }, [email]);

  useEffect(() => {
    localStorage.setItem("password", JSON.stringify(password));
  }, [password]);


  return (
    <div>
      <div className={"login-container"}>
        <div className={"sidebar signup-sidebar"}>
        </div>
        <div className={"login-form"}>
          <h1>The future is NOW.</h1>

          <LoginButton
            label={"Sign up with Google"}
            config={config}
            provider={"google"}
          />
          <div className={"email-field"}>
            <label className={"login-txt"}>Email address</label>
            <img src={Message} className={"message-icon"} alt={"msgIcon"}/>
            <input type= "email" placeholder={"email@address.com"} className={"login-txt"} value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div>
            <label className={"login-txt"}>Password</label>
            <img src={Lock} className={"lock-icon"} alt={"lockIcon"}/>
            <img src={Invisible} className={"invisible-icon"} alt={"invisibleIcon"}/>
            <input type={"password"} className={"login-txt"} placeholder={"*************"} value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div>
            <input type={"checkbox"} className={"checkbox"}/>I agree to Meliora Impacts’s Terms of Service and Privacy Policy
          </div>
          <Link to={"/register"}><button className={"sign-in-btn"}>Sign up</button></Link>
          <label className={"sign-up-txt"}>Don´t have an account? <Link to={"/login"}>Sign in</Link> </label>

        </div>
      </div>
    </div>
  );
}