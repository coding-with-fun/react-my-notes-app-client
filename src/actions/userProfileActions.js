import { getUserDetails } from '../api/user.api';

export const fetchUserDetails = (token) => {
    return (dispatch) => {
        getUserDetails(token)
            .then((res) => {
                dispatch(handleGetUserDetails(res.data.data.user));
            })
            .catch((err) => console.error(err.response.data.data));
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
