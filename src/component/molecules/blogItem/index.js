import React from "react";
import { useHistory, withRouter } from "react-router-dom";
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
        <div className="title-container">
          <p className="title">{title}</p>
          <div className="edit-container">
            <p
              className="edit"
              onClick={() => history.push(`/create-blog/${props._id}`)}
            >
              Edit
            </p>{" "}
            | <p className="delete">Delete</p>
          </div>
        </div>
        <p className="author">
          {author} - {date}
        </p>
        <p className="body">{body}</p>
        <Button
          label="VIEW DETAIL"
          onClick={() => history.push(`/detail-blog/${props._id}`)}
        />
      </div>
    </div>
  );
};

export default BlogItem;
