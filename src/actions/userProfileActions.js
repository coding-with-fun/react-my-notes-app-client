import { getUserDetails } from '../api/user.api';

export const fetchUserDetails = (token) => {
    return (dispatch) => {
        dispatch(loadingGetUserDetails());
        getUserDetails(token)
            .then((res) => {
                dispatch(handleGetUserDetails(res.data.data.user));
                dispatch(loadingGetUserDetails());
            })
            .catch((err) => {
                console.error(err.response.data.data);
                dispatch(loadingGetUserDetails());
            });
    };
};

export const loadingGetUserDetails = () => {
    return {
        type: 'LOADING_USER_DETAILS',
    };
};

export const handleGetUserDetails = (details) => {
    return {
        type: 'GET_USER_DETAILS',
        payload: {
            details,
        },
    };
};
