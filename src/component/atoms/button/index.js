import React from "react";
import "./index.scss";

const Button = ({ label, ...rest }) => {
  return (
    <button className="button" {...rest}>
      {label}
    </button>
  );
};

export default Button;
