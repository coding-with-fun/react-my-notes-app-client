const initialState = {
    tab: "notes",
};

export const toggleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SWITCH_TABS":
            return {
                ...state,
                tab: state.tab === "notes" ? "todo" : "notes",
            };

        default:
            return {
                ...state,
            };
    }
};
