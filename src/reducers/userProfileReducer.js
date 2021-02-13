const initialState = {};

export const userProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER_DETAILS':
            return {
                ...state,
                ...action.payload.details,
            };

        default:
            return state;
    }
};
