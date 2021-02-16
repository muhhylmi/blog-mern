import React from "react";
import { useHistory } from "react-router-dom";
import { RegisterBg } from "../../../assets";
import { Button } from "../../atoms";
import "./index.scss";

const BlogItem = (props) => {
  const { image, title, date, body, author } = props;

  const history = useHistory();

  return (
    <div className="blog-item">
      <img src={image} className="img-thumb" alt="post" />
      <div className="content-detail">
        <p className="title">{title}</p>
        <p className="author">
          {author} - {date}
        </p>
        <p className="body">{body}</p>
        <Button label="More.." onClick={() => history.push("/detail-blog")} />
      </div>
    </div>
  );
};

export default BlogItem;
