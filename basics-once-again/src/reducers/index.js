import { combineReducers } from "redux";
import { getTodoListReducer } from "./getTodoListReducer";

// tell Redux to use my reducers:
export default combineReducers({
    // A: processA
    todoList: getTodoListReducer
});
