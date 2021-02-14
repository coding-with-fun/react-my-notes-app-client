import { getUserDetails } from '../api/user.api';
import { userSignOut } from './authenticationActions';
import { handleLoadTodo, loadNotesItems } from './userDataActions';

export const handleGetUserDetails = (token) => {
    return (dispatch) => {
        dispatch(loadingGetUserDetails());
        getUserDetails(token)
            .then((res) => {
                console.log('object');
                dispatch(fetchUserDetails(res.data.data.user));
                dispatch(handleLoadTodo(res.data.data.user.todoList));
                dispatch(loadNotesItems(res.data.data.user.noteList));
                dispatch(loadingGetUserDetails());
            })
            .catch(() => {
                dispatch(userSignOut());
                dispatch(loadingGetUserDetails());
            });
    };
};

export const loadingGetUserDetails = () => {
    return {
        type: 'LOADING_USER_DETAILS',
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
