import _ from "loadsh";
import JsonPlaceholder from "../apis/JsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
        await dispatch(fetchPosts());

        // const userIds = _.uniq(_.map(getState().posts,"userId"));
        // userIds.forEach(id => dispatch(fetchUser(id)));

        _.chain(getState().posts)
                .map('userId')
                        .uniq()
                        .forEach(id => dispatch(fetchUser(id)))
                        .value();
}

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

export const fetchUser = userId => dispatch => {
        _fetchUser(userId,dispatch);
}

const _fetchUser = _.memoize(async (userId, dispatch) => {
        const response = await JsonPlaceholder.get(`/users/${userId}`);

        dispatch({ type: 'FETCH_USER', payload: response.data});
});
