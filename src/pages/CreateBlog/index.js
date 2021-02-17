import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import { Button, Input, Link, TextArea, Upload } from "../../component";
import {
  postDataBlog,
  setForm,
  setImgPreview,
  updateBlogPost,
} from "../../config/redux/action";
import "./index.scss";

const CreateBlog = (props) => {
  const { form, imgPreview } = useSelector((state) => state.createBlogReducer);
  const { title, body, image } = form;
  const dispatch = useDispatch();

  const [sukses, setSukses] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const id = props.match.params.id;
    if (id) {
      axios
        .get(`http://localhost:4000/v1/blog/post/${id}`)
        .then((res) => {
          const data = res.data.data;
          dispatch(setForm("title", data.title));
          dispatch(setForm("body", data.body));
          dispatch(setImgPreview(`http://localhost:4000/${data.image}`));
        })
        .catch((err) => console.log(err));
      setIsUpdate(true);
    }
  }, []);

  const onSubmit = () => {
    const id = props.match.params.id;
    postDataBlog(form, history, setSukses);
    updateBlogPost(form, history, setSukses, id);
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
      <Link
        label="Kembali Ke Home"
        onClick={() => {
          history.push("/");
          clearData();
        }}
      />
      <p className="title">{isUpdate ? "Update" : "Create New"} Post</p>
      {sukses && (
        <p className="alert-sukses">
          Data Berhasil {isUpdate ? "Diupdate" : "Ditambahkan"}
        </p>
      )}
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
        <Button label={isUpdate ? "Update" : "Simpan"} onClick={onSubmit} />
      </div>
    </div>
  );
};

export default withRouter(CreateBlog);
