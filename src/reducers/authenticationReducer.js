const initialState = {
    token: '',
};

export const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_SIGN_IN':
            return {
                ...state,
                token: action.payload.token,
            };

        case 'USER_SIGN_UP':
            return {
                ...state,
                token: action.payload.token,
            };

        case 'USER_SIGN_OUT':
            return {
                ...state,
                token: '',
            };

        default:
            return state;
    }
};
