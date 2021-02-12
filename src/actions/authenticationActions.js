export const setCurrentUser = (token) => {
    return {
        type: 'SET_CURRENT_USER',
        payload: {
            token,
        },
    };
};

export const userSignOut = () => {
    return {
        type: 'USER_SIGN_OUT',
    };
};
