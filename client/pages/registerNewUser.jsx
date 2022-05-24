import React, { useContext, useEffect, useState } from "react";
import { ApiContext } from "../apiContext";
import { FormInput, FormInputPassword } from "../lib/formInput.jsx";
import FirstLayer from "../pics/register-pics/register-bg.png";
import RedBall from "../pics/register-pics/redBall.png";
import WhiteDot from "../pics/register-pics/whiteDot.png";
import { useNavigate } from "react-router-dom";

export function RegisterNewUser() {
  const {registerNewOrganization} = useContext(ApiContext);
  const [img, setImg] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [cardType, setCardType] = useState("");
  const [cardNumber, setCardNumber] = useState("");
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

  useEffect(() => {
    localStorage.setItem("img", JSON.stringify(img));
  }, [img]);

const imageData = localStorage.getItem("img");

  async function handleSubmit(event) {
      event.preventDefault();

      await fetch("api/register", {
          method: "POST",
          body: new URLSearchParams({
            img,
              firstName,
              lastName,
              mobileNumber,
              cardType,
              cardNumber,
              companyName,
              email,
              password,
              jobTitle,
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
          <img src={FirstLayer} className={"first-layer-bg"}/>
          <img src={RedBall} className={"red-ball"}/>
          <img src={WhiteDot} className={"white-dot"}/>
        </div>
        <div className={"child-container"}>
          <form className={"input-form"} onSubmit={handleSubmit}>
            <h1>Register your organization</h1>
            <div>
              <input type={"file"} name={"img"} value={img} onChange={(e) => setImg(e.target.value)}/>
            </div>
            <div className={"name-fields"}>
              <FormInput label={"First name:"} value={firstName} onChangeValue={setFirstName}/>
              <FormInput label={"Last name:"} value={lastName} onChangeValue={setLastName}/>
            </div>
            <FormInput label={"Mobile number:"} value={mobileNumber} onChangeValue={setMobileNumber}/>
            <label>Card type</label>
            <select className={"input-field"} value={cardType} onChange={(e) => setCardType(e.target.value)}>
              <option>Visa</option>
              <option>Master</option>
            </select>
            <FormInput label={"Card number"} value={cardNumber} onChangeValue={setCardNumber}/>
            <FormInput label={"Company name:"} value={companyName} onChangeValue={setCompanyName}/>
            <FormInput label={"Job title:"} value={jobTitle} onChangeValue={setJobTitle}/>
            <FormInput label={"Email:"} value={email} onChangeValue={setEmail}/>
            <FormInputPassword label={"Password"} value={password} onChangeValue={setPassword}/>
            <button className={"sign-in-btn"}>Continue</button>
          </form>
        </div>
      </div>
    </div>
  );
}