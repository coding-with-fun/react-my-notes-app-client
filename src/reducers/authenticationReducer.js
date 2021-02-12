const initialState = {
    token: '',
};

export const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
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
