import React, { useState } from 'react';
import { connect } from 'react-redux';

const AddTodo = () => {
    const [isInputOpen, setIsInputOpen] = useState(false);

    const toggleInput = () => {
        setIsInputOpen(!isInputOpen);
    };

    return (
        <div className="add_todo__container">
            <div className="header">
                {!isInputOpen ? (
                    <span onClick={toggleInput}>
                        <i className="fas fa-plus-circle"></i>
                    </span>
                ) : null}
            </div>
        </div>
    );
};

export default connect()(AddTodo);
