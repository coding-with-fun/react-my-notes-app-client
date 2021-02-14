export const handleToggleTodo = (todoList) => {
    return (dispatch) => {
        dispatch(toggleTodoLoading());
        dispatch(toggleTodo(todoList));
        dispatch(toggleTodoLoading());
    };
};

export const toggleTodoLoading = () => {
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

export const toggleTodo = (todoList) => {
    return {
        type: 'TOGGLE_TODO',
        payload: {
            todoList,
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
