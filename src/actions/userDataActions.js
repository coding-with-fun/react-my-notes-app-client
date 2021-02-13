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
