import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { BlogItem, Button } from "../../component";
import { setDataBlog } from "../../config/redux/action";
import "./home.scss";

const Home = () => {
  const [counter, setCounter] = useState(1);
  const { dataBlogs, page } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataBlog(counter));
  }, [counter, dispatch]);

  const history = useHistory();
  const previous = () => {
    setCounter(counter === 1 ? 1 : counter - 1);
  };
  const next = () => {
    setCounter(counter === 3 ? 3 : counter + 1);
  };

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
        <Button label="Previous" onClick={previous} />
        <div style={{ margin: "20px" }}></div>
        <p className="text-page">
          {page.currentPage} / {page.totalPage}
        </p>
        <div style={{ margin: "20px" }}></div>
        <Button label="Next" onClick={next} />
      </div>
    </div>
  );
};

export default Home;
