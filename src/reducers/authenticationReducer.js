const initialState = {
    token: '',
    isAuthenticated: false,
};

export const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                token: action.payload.token,
                isAuthenticated: true,
            };

        case 'USER_SIGN_OUT':
            return {
                ...state,
                token: '',
                isAuthenticated: false,
            };

        default:
            return state;
    }
};
