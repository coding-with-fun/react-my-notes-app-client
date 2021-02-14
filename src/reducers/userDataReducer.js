const initialState = {
    loadingNotes: false,
    notesList: [],
    loadingToDo: false,
    completedTodoList: [],
    uncompletedTodoList: [],
};

export const userDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_TODO_LOADING':
            return {
                ...state,
                loadingToDo: !state.loadingToDo,
            };

        case 'LOAD_TODO':
            return {
                ...state,
                completedTodoList: action.payload.completedTodoList,
                uncompletedTodoList: action.payload.uncompletedTodoList,
            };

        case 'ADD_TODO':
            return {
                ...state,
                uncompletedTodoList: [
                    ...state.uncompletedTodoList,
                    action.payload.todoItem,
                ],
            };

        case 'TOGGLE_NOTES_LOADING':
            return {
                ...state,
                loadingNotes: !state.loadingNotes,
            };

        case 'LOAD_NOTES':
            return {
                ...state,
                notesList: action.payload.notesItems,
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
