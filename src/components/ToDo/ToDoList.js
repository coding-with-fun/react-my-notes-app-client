import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../../shared/Loader';
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
        const { loadingToDo } = this.props;
        const { completedList, uncompletedList } = this.state;

        return (
            <div className="container">
                {loadingToDo && <Loader />}

                {completedList.length > 0 && (
                    <div className="card uncompleted_list__card">
                        <div className="card-header">Completed</div>
                        <ul className="list-group list-group-flush todo_list__container">
                            {completedList.map((item) => {
                                return (
                                    <ToDoListItem key={item._id} item={item} />
                                );
                            })}
                        </ul>
                    </div>
                )}

                {uncompletedList.length > 0 && (
                    <div className="card completed_list__card">
                        <div className="card-header">Uncompleted</div>
                        <ul className="list-group list-group-flush todo_list__container">
                            {uncompletedList.map((item) => {
                                return (
                                    <ToDoListItem key={item._id} item={item} />
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
        loadingToDo: state.userData.loadingToDo,
    };
})(ToDoList);
