import React from "react";
import { Button, Input, TextArea, Upload } from "../../component";
import "./index.scss";

const CreateBlog = () => {
  return (
    <div className="create-blog-container">
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
