import { getUserDetails } from '../api/user.api';
import { userSignOut } from './authenticationActions';
import { loadTodoItems, loadNotesItems } from './userDataActions';

export const handleGetUserDetails = (token) => {
    return (dispatch) => {
        getUserDetails(token)
            .then((res) => {
                dispatch(fetchUserDetails(res.data.data.user));
                dispatch(loadTodoItems(res.data.data.user.todoList));
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
