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
        const { completedList, uncompletedList } = this.state;

        return (
            <div className="container">
                <div>
                    <b>Completed</b>
                </div>
                {completedList.length > 0 &&
                    completedList.map((item) => {
                        return <p key={item._id}>{item.content}</p>;
                    })}

                <div>
                    <b>Uncompleted</b>
                </div>
                {uncompletedList.length > 0 &&
                    uncompletedList.map((item) => {
                        return <p key={item._id}>{item.content}</p>;
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
