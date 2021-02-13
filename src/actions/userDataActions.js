export const toggleToDoLoading = () => {
    return {
        type: 'TOGGLE_TODO_LOADING',
    };
};

export const loadTodoItems = (todoItems) => {
    return {
        type: 'LOAD_TODO',
        payload: {
            todoItems,
        },
    };
};

export const addTodo = (todoItem) => {
    return {
        type: 'ADD_TODO',
        payload: {
            todoItem,
        },
    };
};

export const loadNotesItems = (noteItems) => {
    return {
        type: 'LOAD_NOTE',
        payload: {
            noteItems,
        },
    };
};

export const addNote = (noteItem) => {
    return {
        type: 'ADD_NOTE',
        payload: {
            noteItem,
        },
    };
};
