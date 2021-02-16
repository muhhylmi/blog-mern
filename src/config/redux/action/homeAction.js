import axios from "axios";

export const setDataBlog = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:4000/v1/blog/posts")
      .then((result) => {
        const responseAPI = result.data;
        dispatch({ type: "UPDATE_DATA_BLOG", payload: responseAPI.data });
      })
      .catch((err) => console.log(err));
  };
};
