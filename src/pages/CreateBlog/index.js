import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Input, Link, TextArea, Upload } from "../../component";
import "./index.scss";

const CreateBlog = () => {
  const history = useHistory();

  return (
    <div className="create-blog-container">
      <Link label="Kembali Ke Home" onClick={() => history.push("/")} />
      <p className="title">Create New Post</p>
      <Input label="Judul Post" />
      <Upload />
      <TextArea />
      <div className="btn-container">
        <Button label="Save" />
      </div>
    </div>
  );
};

export default CreateBlog;
