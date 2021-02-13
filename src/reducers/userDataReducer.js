const initialState = {
    details: {},
    notesList: [],
    todoList: [],
};

export const userDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_TODO':
            return {
                ...state,
                todoList: action.payload.todoItems,
            };

        case 'ADD_TODO':
            return {
                ...state,
                todoList: [...state.todoList, action.payload.todoItem],
            };

        case 'ADD_NOTE':
            return {
                ...state,
                notesList: [...state.notesList, action.payload.noteItem],
            };

        default:
            return state;
    }
};
