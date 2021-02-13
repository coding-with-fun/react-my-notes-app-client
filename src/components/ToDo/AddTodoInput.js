import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/userDataActions';
import { addToDo } from '../../api/todo.api';

const AddTodoInput = ({ toggleInput, dispatch, token }) => {
    const [addTodoInputValue, setAddTodoInputValue] = useState('');

    const handleKeyPress = async (event) => {
        if (event.key === 'Enter') {
            const todoData = await addToDo(
                {
                    content: addTodoInputValue,
                },
                token
            );
            dispatch(addTodo(todoData.data.data.todoData));
            handleCloseInput();
        } else {
            setAddTodoInputValue(event.target.value);
        }
    };

    const handleCloseInput = () => {
        setAddTodoInputValue('');
        toggleInput();
    };

    return (
        <div className="add_todo_input__container">
            <input
                type="text"
                className="form-control"
                placeholder="Add a new ToDo"
                value={addTodoInputValue}
                aria-label="Add a new ToDo"
                aria-describedby="new-todo"
                onChange={(event) => handleKeyPress(event)}
                onKeyPress={(event) => handleKeyPress(event)}
            />

            <span className="close_add_todo_icon" onClick={handleCloseInput}>
                <i className="fas fa-times-circle"></i>
            </span>
        </div>
    );
};

export default connect((state) => {
    return {
        token: state.auth.token,
    };
})(AddTodoInput);
