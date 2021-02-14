import React, { Component } from 'react';

class ToDoListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editToDo: false,
        };
    }

    handleToggleEditToDo = () => {
        this.setState((prevState) => {
            return {
                editToDo: !prevState.editToDo,
            };
        });
    };

    render() {
        const { item, index, handleToggleToDo } = this.props;
        const { editToDo } = this.state;

        return (
            <li className="list-group-item todo_item__container">
                <div className="todo_item__name">
                    <input
                        className="form-check-input mt-0 todo_item__checkbox"
                        type="checkbox"
                        value=""
                        checked={item.isCompleted}
                        onChange={(e) => handleToggleToDo(e, index)}
                    />
                    {editToDo ? (
                        <span>Hello</span>
                    ) : (
                        <span>{item.content}</span>
                    )}
                </div>
                <span className="todo__operations">
                    <i
                        className="fas fa-edit edit__todo"
                        onClick={(e) =>
                            this.handleToggleEditToDo(e, index)
                        }></i>
                    <i className="fas fa-trash delete__todo"></i>
                </span>
            </li>
        );
    }
}

export default ToDoListItem;
