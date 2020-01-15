import { combineReducers } from "redux";
import posts from "./postReducer";
import categories from "./categoryReducer";

export default combineReducers({
  posts: posts,
  categories: categories
});