import React, { Component } from 'react';
import { connect } from 'react-redux';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completedList: [],
            uncompletedList: [],
        };
    }

    componentDidMount() {
        const todoList = this.props.todoList;
        todoList.length > 0 &&
            todoList.map((todoItem) => {
                if (todoItem.isCompleted) {
                    this.setState((prevState) => {
                        return {
                            completedList: [
                                ...prevState.completedList,
                                {
                                    title: todoItem.content,
                                    id: todoItem._id,
                                },
                            ],
                        };
                    });
                } else {
                    this.setState((prevState) => {
                        return {
                            uncompletedList: [
                                ...prevState.uncompletedList,
                                {
                                    title: todoItem.content,
                                    id: todoItem._id,
                                },
                            ],
                        };
                    });
                }

                return 1;
            });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.todoList.length < this.props.todoList.length) {
            const item = this.props.todoList[this.props.todoList.length - 1];

            this.setState((prevState) => {
                return {
                    uncompletedList: [
                        ...prevState.uncompletedList,
                        {
                            title: item.content,
                            id: item._id,
                        },
                    ],
                };
            });
        }
    }

    render() {
        const { completedList, uncompletedList } = this.state;

        return (
            <div className="container">
                <div>
                    <b>Completed</b>
                </div>
                {completedList.length > 0 &&
                    completedList.map((item) => {
                        return <p key={item.id}>{item.title}</p>;
                    })}

                <div>
                    <b>Uncompleted</b>
                </div>
                {uncompletedList.length > 0 &&
                    uncompletedList.map((item) => {
                        return <p key={item.id}>{item.title}</p>;
                    })}
            </div>
        );
    }
}

export default connect((state) => {
    return {
        todoList: state.userData.todoList,
    };
})(ToDoList);
