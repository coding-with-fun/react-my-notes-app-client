import { getUserDetails } from '../api/user.api';
import { userSignOut } from './authenticationActions';
import { handleLoadTodo, loadNotesItems } from './userDataActions';

export const handleGetUserDetails = (token) => {
    return (dispatch) => {
        dispatch(loadingGetUserDetails(true));
        getUserDetails(token)
            .then((res) => {
                dispatch(fetchUserDetails(res.data.data.user));
                dispatch(handleLoadTodo(res.data.data.user.todoList));
                dispatch(loadNotesItems(res.data.data.user.noteList));
                dispatch(loadingGetUserDetails(false));
            })
            .catch(() => {
                dispatch(userSignOut());
                dispatch(loadingGetUserDetails(false));
            });
    };
};

export const loadingGetUserDetails = (state) => {
    return {
        type: 'LOADING_USER_DETAILS',
        payload: {
            state,
        },
    };
};

export const fetchUserDetails = (details) => {
    return {
        type: 'GET_USER_DETAILS',
        payload: {
            details,
        },
    };
};
