import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// export const fetchPosts = () => {
//     return async function (dispatch, getState) {
//         const response = await jsonPlaceholder.get('/posts');
//         dispatch({
//             type: 'FETCH_POSTS',
//             payload: response
//         });
//     }
// };

//           function which returns a function
export const fetchPosts = () => async dispatch => { // it returns a request object, not a plain object -> redux thunk needed
    // make request to /posts:
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
};

// id - id of the user we want to fetch
export const fetchUser = (id) => dispatch => {
    _fetchUser(id, dispatch);
};


const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get('/users/' + id);
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
});