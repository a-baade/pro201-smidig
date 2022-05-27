import React, { useContext, useEffect, useState } from "react";
import { ApiContext } from "../apiContext";
import { FormInput, FormInputPassword } from "../lib/formInput.jsx";
import FirstLayer from "../pics/register-pics/register-bg.png";
import RedBall from "../pics/register-pics/redBall.png";
import WhiteDot from "../pics/register-pics/whiteDot.png";
import { useNavigate } from "react-router-dom";
import FileBase64 from "react-file-base64";

export function RegisterNewUser() {
  const { registerNewOrganization } = useContext(ApiContext);
  const [img, setImg] = useState({ image: "" });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState(() => {
    const savedEmail = localStorage.getItem("email");
    const initValueEmail = JSON.parse(savedEmail);
    return initValueEmail || "";
  });
  const [password, setPassword] = useState(() => {
    const savedPassword = localStorage.getItem("password");
    const initValuePassword = JSON.parse(savedPassword);
    return initValuePassword || "";
  });
  const [jobTitle, setJobTitle] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    /*
    const formData = new FormData();
    formData.append("img", event.target["img"].files[0]);
    console.log(event.target["img"].files[0]);
    let image = "";
    for (let pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1].name);
      image = pair[1].name;
    }

     */

    await fetch("api/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "enc-type": "multipart/form-data",
      },
      body: JSON.stringify({
        img,
        firstName,
        lastName,
        mobileNumber,
        cardType,
        cardNumber,
        companyName,
        jobTitle,
        email,
        password,
      }),
    });
    setCompanyName("");
    navigate("/");
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   registerNewOrganization({firstName, lastName, mobileNumber, companyName, email, password, jobTitle});
  //   navigate("/");
  // }

  return (
    <div>
      <div className={"parent-container"}>
        <div>
          <img src={FirstLayer} className={"first-layer-bg"} />
          <img src={RedBall} className={"red-ball"} />
          <img src={WhiteDot} className={"white-dot"} />
        </div>
        <div className={"child-container"}>
          <form
            className={"input-form"}
            onSubmit={handleSubmit}
            encType={"multipart/form-data"}
          >
            <h1>Register your organization</h1>
            <div>
              <FileBase64
                multiple={false}
                onDone={({ base64 }) => setImg({ ...img, image: base64 })}
              />
            </div>
            <div className={"name-fields"}>
              <FormInput
                label={"First name:"}
                value={firstName}
                onChangeValue={setFirstName}
              />
              <FormInput
                label={"Last name:"}
                value={lastName}
                onChangeValue={setLastName}
              />
            </div>
            <FormInput
              label={"Mobile number:"}
              value={mobileNumber}
              onChangeValue={setMobileNumber}
            />
            <FormInput
              label={"Company name:"}
              value={companyName}
              onChangeValue={setCompanyName}
            />
            <FormInput
              label={"Job title:"}
              value={jobTitle}
              onChangeValue={setJobTitle}
            />
            <FormInput
              label={"Email:"}
              value={email}
              onChangeValue={setEmail}
            />
            <FormInputPassword
              label={"Password"}
              value={password}
              onChangeValue={setPassword}
            />
            <button className={"sign-in-btn"}>Continue</button>
          </form>
        </div>
      </div>
    </div>
  );
}
