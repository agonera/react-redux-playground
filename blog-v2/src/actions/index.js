import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';


export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // we take argument 'dispatch' so we can dispatch our own actions inside of here
    // call fetchPosts once and fetchUsers multiple times
    await dispatch(fetchPosts()); // await - we wait for this api request to be completed before we move on
    //console.log(getState().posts);
    // find unique user ids:
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id => dispatch(fetchUser(id)));
};


//v1.0
// export const fetchPosts = () => {
//     return async function (dispatch, getState) {
//         const response = await jsonPlaceholder.get('/posts');
//         dispatch({
//             type: 'FETCH_POSTS',
//             payload: response
//         });
//     }
// };


// v2.0
//           function which returns a function
export const fetchPosts = () => async (dispatch) => { // it returns a request object, not a plain object -> redux thunk needed
    // make request to /posts:
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
};


// v1.0
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get('/users/' + id);
//     dispatch({
//         type: 'FETCH_USER',
//         payload: response.data
//     });
// });


// v2.0
// id - id of the user we want to fetch
export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get('/users/' + id);
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
};

