import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BlogItem, Button } from "../../component";
import "./home.scss";

const Home = () => {
  const [dataBlog, setdataBlog] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/v1/blog/posts")
      .then((result) => {
        const responseAPI = result.data;
        setdataBlog(responseAPI.data);
      })
      .catch((err) => console.log(err));
  });

  const history = useHistory();
  return (
    <div className="content-wrapper">
      <div className="create-wrapper">
        <Button
          label="Create blog"
          onClick={() => history.push("/create-blog")}
        />
      </div>
      <div className="blog-wrapper">
        {dataBlog.map((blog) => {
          return (
            <BlogItem
              key={blog._id}
              image={`http://localhost:4000/${blog.image}`}
              title={blog.title}
              body={blog.body}
              author={blog.author.name}
              date={blog.createdAt}
            />
          );
        })}
      </div>
      <div className="pagination">
        <Button label="Previous" />
        <div style={{ margin: "20px" }}></div>
        <Button label="Next" />
      </div>
    </div>
  );
};

export default Home;
