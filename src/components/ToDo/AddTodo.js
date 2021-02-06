import React, { useState } from 'react';
import { connect } from 'react-redux';
import AddTodoInput from './AddTodoInput';

const AddTodo = () => {
    const [isInputOpen, setIsInputOpen] = useState(false);

    const toggleInput = () => {
        setIsInputOpen(!isInputOpen);
    };

    return (
        <div className="add_todo__container">
            <div className="header">
                {!isInputOpen ? (
                    <span onClick={toggleInput} className="add_todo_icon">
                        <i className="fas fa-plus-circle"></i>
                    </span>
                ) : (
                    <AddTodoInput toggleInput={toggleInput} />
                )}
            </div>
        </div>
    );
};

export default connect()(AddTodo);
