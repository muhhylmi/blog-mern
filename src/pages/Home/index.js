import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { BlogItem, Button } from "../../component";
import { setDataBlog } from "../../config/redux/action";
import "./home.scss";

const Home = () => {
  const { dataBlogs } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataBlog());
  }, [dispatch]);

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
        {dataBlogs.map((blog) => {
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
