import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Input, Link, TextArea, Upload } from "../../component";
import "./index.scss";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [img, setImg] = useState("");
  const [imgPreview, setImgPreview] = useState("");
  const [sukses, setSukses] = useState(false);
  const history = useHistory();

  const onSubmit = () => {
    console.log("title:", title);
    console.log("body:", body);
    console.log("image:", img);

    const data = new FormData();
    data.append("title", title);
    data.append("body", body);
    data.append("image", img);

    axios
      .post("http://localhost:4000/v1/blog/post", data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        setSukses(true);
        setTimeout(() => {
          history.push("/");
        }, 3000);
      })
      .catch((err) => console.log("error", err));
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImg(file);
    setImgPreview(URL.createObjectURL(file));
  };

  return (
    <div className="create-blog-container">
      <Link label="Kembali Ke Home" onClick={() => history.push("/")} />
      <p className="title">Create New Post</p>
      {sukses && <p className="alert-sukses">Data Berhasil Ditambahkan</p>}
      <Input
        label="Judul Post"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Upload img={imgPreview} onChange={(e) => onImageUpload(e)} />
      <TextArea
        label="Content Blog"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <div className="btn-container">
        <Button label="Save" onClick={onSubmit} />
      </div>
    </div>
  );
};

export default CreateBlog;
