export const setCurrentUser = (token) => {
    return {
        type: 'SET_CURRENT_USER',
        payload: {
            token,
        },
    };
};

export const userSignOut = () => {
    console.log('object out');
    localStorage.removeItem('user_token');
    return {
        type: 'USER_SIGN_OUT',
    };
};
