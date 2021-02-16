import homeReducer from "./homeReducer";
import globalReducer from "./globalReducer";
import { combineReducers } from "redux";

const reducer = combineReducers({ homeReducer, globalReducer });

export default reducer;
