const initialStateHome = {
  dataBlogs: [],
};
const homeReducer = (state = initialStateHome, action) => {
  if (action.type === "UPDATE_DATA_BLOG") {
    return {
      ...state,
      dataBlogs: action.payload,
    };
  }

  return state;
};

export default homeReducer;
