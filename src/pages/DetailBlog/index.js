import React, { useEffect, useState } from "react";
import { RegisterBg } from "../../assets";
import "./index.scss";
import { Link } from "../../component";
import { useHistory, withRouter } from "react-router-dom";
import axios from "axios";

const DetailBlog = (props) => {
  const [data, setData] = useState({});
  const history = useHistory();

  useEffect(() => {
    const id = props.match.params.id;
    axios
      .get(`http://localhost:4000/v1/blog/post/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (data.author) {
    return (
      <div className="detail-blog-container">
        <img
          src={`http://localhost:4000/${data.image}`}
          alt="thumb-img"
          className="detail-thumb"
        />
        <p className="detail-title">{data.title}</p>
        <p className="detail-author">
          {data.author.name} - {data.createdAt}
        </p>
        <p className="detail-content">{data.body}</p>
        <Link label="Kembali Ke Home" onClick={() => history.push("/")} />
      </div>
    );
  }
  return <p>Loading ....</p>;
};

export default withRouter(DetailBlog);
