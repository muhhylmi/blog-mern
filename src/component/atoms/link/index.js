import React from "react";
import "./index.scss";

const Link = ({ label, ...rest }) => {
  return (
    <div className="link-container">
      <p className="link-text" {...rest}>
        {label}
      </p>
    </div>
  );
};

export default Link;
