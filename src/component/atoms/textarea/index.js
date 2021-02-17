import React from "react";
import "./index.scss";

const TextArea = ({ label, ...rest }) => {
  return (
    <div className="textarea-container">
      <label>{label}</label>
      <textarea className="text-area" className="text-area" {...rest} />
    </div>
  );
};

export default TextArea;
