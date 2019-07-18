import JsonPlaceholder from "../apis/JsonPlaceholder";

export const fetchPosts = () => async dispatch => {
        const response = await JsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS',payload: response.data });
        
}    
// OLD WAY OF WRITTING
// export const fetchPosts = () => {
//     return async function(dispatch, getState) {
//         const response = await JsonPlaceholder.get('/posts');

//         dispatch({ type: 'FETCH_POSTS',payload: response });
//     }
// }

export const fetchUser = userId => async dispatch => {
        const response = await JsonPlaceholder.get(`/users/${userId}`);

        dispatch({ type: 'FETCH_USER', payload: response.data});
}
