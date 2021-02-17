import React from "react";
import { LoginBg } from "../../../assets";
import "./index.scss";

const Upload = ({ img, ...rest }) => {
  return (
    <div className="upload-container">
      {img && <img src={img} alt="preview" className="preview" />}
      <input type="file" {...rest} />
    </div>
  );
};

export default Upload;
