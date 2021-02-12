import React from "react";
import { RegisterBg } from "../../../assets";
import "./index.scss";
const BlogItem = () => {
  return (
    <div className="blog-item">
      <img src={RegisterBg} className="img-thumb" alt="post" />
      <div className="content-detail">
        <p className="title">Title</p>
        <p className="author"> Author - Date</p>
        <p className="body">
          lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
