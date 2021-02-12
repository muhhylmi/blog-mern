import React from "react";
import { useHistory } from "react-router-dom";
import { BlogItem, Button } from "../../component";
import "./home.scss";

const Home = () => {
  const history = useHistory();
  return (
    <div className="content-wrapper">
      <div className="create-wrapper">
        <Button
          label="Create blog"
          onClick={() => history.push("/create-blog")}
        />
      </div>
      <p>Halaman Home</p>
      <div className="blog-wrapper">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
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
