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
                if (todoItem.completed) {
                    this.setState((prevState) => {
                        return {
                            completedList: [
                                ...prevState.completedList,
                                {
                                    title: todoItem.title,
                                    id: todoItem.id,
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
                                    title: todoItem.title,
                                    id: todoItem.id,
                                },
                            ],
                        };
                    });
                }

                return 1;
            });
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.todoList !== this.props.todoList &&
            prevProps.todoList.length < this.props.todoList.length
        ) {
            const item = this.props.todoList[this.props.todoList.length - 1];

            this.setState((prevState) => {
                return {
                    uncompletedList: [
                        ...prevState.uncompletedList,
                        {
                            title: item.title,
                            id: item.id,
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
                <b>Completed</b>
                {completedList.length > 0 &&
                    completedList.map((item) => {
                        return <p key={item.id}>{item.title}</p>;
                    })}

                <b>Uncompleted</b>
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
