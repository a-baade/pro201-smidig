import React, { useContext, useState } from "react";
import { ApiContext } from "../apiContext";
import { useNavigate } from "react-router-dom";
import { FormInput } from "../lib/formInput.jsx";

export function RegisterNewUser() {
  const {registerNewOrganization} = useContext(ApiContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  async function handleSubmit(event) {
      event.preventDefault();

      await fetch("api/register/add", {
          method: "POST",
          body: new URLSearchParams({
              firstName,
              lastName,
              mobileNumber,
              companyName,
              email,
              password,
              jobTitle,
          }),
      });
      setCompanyName("");
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   registerNewOrganization({firstName, lastName, mobileNumber, companyName, email, password, jobTitle});
  //   navigate("/");
  // }


  return (
    <form onSubmit={handleSubmit}>
      <h1>Register your organization</h1>
      <FormInput label={"First name:"} value={firstName} onChangeValue={setFirstName}/>
      <FormInput label={"Last name:"} value={lastName} onChangeValue={setLastName}/>
      <FormInput label={"Mobile number:"} value={mobileNumber} onChangeValue={setMobileNumber}/>
      <FormInput label={"Company name:"} value={companyName} onChangeValue={setCompanyName}/>
      <FormInput label={"Email:"} value={email} onChangeValue={setEmail}/>
      <FormInput label={"Password"} value={password} onChangeValue={setPassword}/>
      <FormInput label={"Job title:"} value={jobTitle} onChangeValue={setJobTitle}/>
      <button>Continue</button>
    </form>
  );
}