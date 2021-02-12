import React from "react";
import "./index.scss";

const Button = ({ label, ...rest }) => {
  return <button className="button">{label}</button>;
};

export default Button;
