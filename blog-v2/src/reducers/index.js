import { combineReducers } from "redux";
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';


export default combineReducers({ // root reducer
    // A: doSomethingWithA(state.A, action)
    posts: postsReducer,
    users: usersReducer

});