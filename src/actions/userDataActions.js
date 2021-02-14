export const handleToggleTodo = (todoList) => {
    return (dispatch) => {
        dispatch(toggleTodoLoading());
        dispatch(toggleTodo(todoList));
        dispatch(toggleTodoLoading());
    };
};

export const handleLoadTodo = (todoList) => {
    const tempCompletedList = [];
    const tempUncompletedList = [];

    todoList.length > 0 &&
        todoList.map((todoItem) => {
            if (todoItem.isCompleted) {
                tempCompletedList.push(todoItem);
            } else {
                tempUncompletedList.push(todoItem);
            }
            return 1;
        });

    return (dispatch) => {
        dispatch(loadTodoItems(tempUncompletedList, tempCompletedList));
    };
};

export const toggleTodoLoading = () => {
    return {
        type: 'TOGGLE_TODO_LOADING',
    };
};

export const loadTodoItems = (tempUncompletedList, tempCompletedList) => {
    return {
        type: 'LOAD_TODO',
        payload: {
            uncompletedTodoList: tempUncompletedList,
            completedTodoList: tempCompletedList,
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
