import { combineReducers } from "redux";
import { getTodoListReducer } from "./getTodoListReducer";

export default combineReducers({
    todoList: getTodoListReducer
});
