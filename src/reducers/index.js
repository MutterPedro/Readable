import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {categories} from "./Categories";
import {posts} from "./Posts";
import {comments} from "./Comments";

export default combineReducers({
    categories,
    posts,
    comments,
    form: formReducer
});