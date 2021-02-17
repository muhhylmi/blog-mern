import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Input, Link, TextArea, Upload } from "../../component";
import {
  postDataBlog,
  setForm,
  setImgPreview,
} from "../../config/redux/action";
import "./index.scss";

const CreateBlog = () => {
  const { form, imgPreview } = useSelector((state) => state.createBlogReducer);
  const { title, body, image } = form;
  const dispatch = useDispatch();

  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  // const [img, setImg] = useState("");
  // const [imgPreview, setImgPreview] = useState("");
  const [sukses, setSukses] = useState(false);
  const history = useHistory();

  const onSubmit = () => {
    postDataBlog(form, history, setSukses);
    clearData();
  };

  const clearData = () => {
    dispatch(setForm("image", ""));
    dispatch(setForm("title", ""));
    dispatch(setForm("body", ""));
    dispatch(setImgPreview(""));
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm("image", file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
  };

  return (
    <div className="create-blog-container">
      <Link label="Kembali Ke Home" onClick={() => history.push("/")} />
      <p className="title">Create New Post</p>
      {sukses && <p className="alert-sukses">Data Berhasil Ditambahkan</p>}
      <Input
        label="Judul Post"
        value={title}
        onChange={(e) => dispatch(setForm("title", e.target.value))}
      />
      <Upload img={imgPreview} onChange={(e) => onImageUpload(e)} />
      <TextArea
        label="Content Blog"
        value={body}
        onChange={(e) => dispatch(setForm("body", e.target.value))}
      />
      <div className="btn-container">
        <Button label="Save" onClick={onSubmit} />
      </div>
    </div>
  );
};

export default CreateBlog;
