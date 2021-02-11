import React from "react";
import "./index.scss";

const Link = ({ label }) => {
  return (
    <div className="link-container">
      <p className="link-text">{label}</p>
    </div>
  );
};

export default Link;
