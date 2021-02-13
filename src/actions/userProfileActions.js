import { getUserDetails } from '../api/user.api';

export const fetchUserDetails = (token) => {
    return (dispatch) => {
        getUserDetails(token).then((res) => {
            console.log(res.data.data.user);
            dispatch(handleGetUserDetails(res.data.data.user));
        });
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
