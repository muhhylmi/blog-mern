import React from "react";
import "./index.scss";

const Button = ({ label, ...rest }) => {
  return (
    <div className="button">
      <button>{label}</button>
    </div>
  );
};

export default Button;
