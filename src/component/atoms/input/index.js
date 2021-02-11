import React from "react";
import "./index.scss";

const Input = ({ label, ...rest }) => {
  return (
    <div className="container">
      <div className="label">
        <label>{label}</label>
      </div>
      <input className="inputField" {...rest}></input>
    </div>
  );
};

export default Input;
