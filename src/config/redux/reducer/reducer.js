import homeReducer from "./homeReducer";
import globalReducer from "./globalReducer";
import { combineReducers } from "redux";
import createBlogReducer from "./createBlogReducer";

const reducer = combineReducers({
  homeReducer,
  globalReducer,
  createBlogReducer,
});

export default reducer;
