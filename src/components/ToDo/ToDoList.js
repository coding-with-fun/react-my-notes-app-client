import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    handleToggleTodo,
    handleUpdateTodo,
} from '../../actions/userDataActions';
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
        const { uncompletedTodoList, completedTodoList } = this.props;

        this.setState({
            completedList: completedTodoList,
            uncompletedList: uncompletedTodoList,
        });
    };

    handleToggleToDo = async (e, index) => {
        const { dispatch } = this.props;
        const { uncompletedList, completedList } = this.state;

        if (e.target.checked) {
            const item = uncompletedList[index];
            item.isCompleted = true;
            completedList.push(item);
            uncompletedList.splice(index, 1);
            await dispatch(handleUpdateTodo(item._id, item));
        } else {
            const item = completedList[index];
            item.isCompleted = false;
            uncompletedList.push(item);
            completedList.splice(index, 1);
            await dispatch(handleUpdateTodo(item._id, item));
        }

        await dispatch(handleToggleTodo(uncompletedList, completedList));
        this.loadTodoList();
    };

    componentDidMount() {
        this.loadTodoList();
    }

    componentDidUpdate(prevProps) {
        const { uncompletedTodoList, completedTodoList } = this.props;

        if (uncompletedTodoList !== prevProps.uncompletedTodoList) {
            this.setState({
                uncompletedList: uncompletedTodoList,
            });
        }

        if (completedTodoList !== prevProps.completedTodoList) {
            this.setState({
                completedList: completedTodoList,
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
                            {completedList.map((item, index) => {
                                return (
                                    <ToDoListItem
                                        key={item._id}
                                        item={item}
                                        index={index}
                                        handleToggleToDo={this.handleToggleToDo}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                )}

                {uncompletedList.length > 0 && (
                    <div className="card completed_list__card">
                        <div className="card-header">Uncompleted</div>
                        <ul className="list-group list-group-flush todo_list__container">
                            {uncompletedList.map((item, index) => {
                                return (
                                    <ToDoListItem
                                        key={item._id}
                                        item={item}
                                        index={index}
                                        handleToggleToDo={this.handleToggleToDo}
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
        completedTodoList: state.userData.completedTodoList,
        uncompletedTodoList: state.userData.uncompletedTodoList,
    };
})(ToDoList);
