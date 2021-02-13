import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToDoListItem from './ToDoListItem';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completedList: [],
            uncompletedList: [],
        };
    }

    loadTodoList = () => {
        const todoList = this.props.todoList;
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

        this.setState({
            completedList: tempCompletedList,
            uncompletedList: tempUncompletedList,
        });
    };

    componentDidMount() {
        this.loadTodoList();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.todoList.length < this.props.todoList.length) {
            const item = this.props.todoList[this.props.todoList.length - 1];

            this.setState((prevState) => {
                return {
                    uncompletedList: [...prevState.uncompletedList, item],
                };
            });
        }
    }

    render() {
        const { completedList, uncompletedList, editToDo } = this.state;

        return (
            <div className="container">
                {completedList.length > 0 && (
                    <div className="card">
                        <div className="card-header">Completed</div>
                        <ul className="list-group list-group-flush">
                            {completedList.map((item) => {
                                return (
                                    <ToDoListItem
                                        key={item._id}
                                        item={item}
                                        editToDo={editToDo}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                )}

                {uncompletedList.length > 0 && (
                    <div className="card">
                        <div className="card-header">Uncompleted</div>
                        <ul className="list-group list-group-flush">
                            {uncompletedList.map((item) => {
                                return (
                                    <ToDoListItem
                                        key={item._id}
                                        item={item}
                                        editToDo={editToDo}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

export default connect((state) => {
    return {
        todoList: state.userData.todoList,
    };
})(ToDoList);
