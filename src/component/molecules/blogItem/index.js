import React from "react";
import { useHistory } from "react-router-dom";
import { RegisterBg } from "../../../assets";
import { Button } from "../../atoms";
import "./index.scss";

const BlogItem = () => {
  const history = useHistory();

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
        <Button label="More.." onClick={() => history.push("/detail-blog")} />
      </div>
    </div>
  );
};

export default BlogItem;
