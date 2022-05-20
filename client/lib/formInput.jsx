import React from "react";

export function FormInput({ value, label, onChangeValue }) {
  return (
    <div className={"form-input"}>
      <label className={"input-label"}>
        <strong>{label}</strong>{" "}
        <input value={value} onChange={(e) => onChangeValue(e.target.value)} />
      </label>
    </div>
  );
}

export function FormInputPassword({ value, label, onChangeValue }) {
  return (
    <div className={"form-input"}>
      <label className={"input-label"}>
        <strong>{label}</strong>{" "}
        <input type={"password"} value={value} onChange={(e) => onChangeValue(e.target.value)} />
      </label>
    </div>
  );
}

export function FormInputNumber({ value, label, onChangeValue }) {
  return (
    <div className={"form-input"}>
      <label className={"input-label"}>
        <strong>{label}</strong>{" "}
        <input type={"number"} value={value} onChange={(e) => onChangeValue(e.target.value)} />
      </label>
    </div>
  );
}