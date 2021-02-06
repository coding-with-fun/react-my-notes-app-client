import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/userDataActions';

const AddTodoInput = ({ toggleInput, dispatch }) => {
    const [addTodoInputValue, setAddTodoInputValue] = useState('');

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            const body = {
                userId: 1,
                id: 20,
                title: addTodoInputValue,
                completed: false,
            };
            dispatch(addTodo(body));
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

export default connect()(AddTodoInput);
