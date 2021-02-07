export const userSignIn = (token) => {
    return {
        type: 'USER_SIGN_IN',
        payload: {
            token,
        },
    };
};

export const userSignUp = (token) => {
    return {
        type: 'USER_SIGN_UP',
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
