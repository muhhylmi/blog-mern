import React from "react";
import { LoginBg } from "../../../assets";
import "./index.scss";

const Upload = ({ ...rest }) => {
  return (
    <div className="upload-container">
      <img src={LoginBg} alt="preview" className="preview" />
      <input type="file" {...rest} />
    </div>
  );
};

export default Upload;
