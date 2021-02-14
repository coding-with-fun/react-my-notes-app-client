const initialState = {
    fetchingUserDetails: true,
};

export const userProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING_USER_DETAILS':
            return {
                ...state,
                fetchingUserDetails: action.payload.state,
            };

        case 'GET_USER_DETAILS':
            return {
                ...state,
                ...action.payload.details,
            };

        default:
            return state;
    }
};
