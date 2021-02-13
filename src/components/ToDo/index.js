import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTodoItems } from '../../actions/userDataActions';
import AddTodo from './AddTodo';
import ToDoList from './ToDoList';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
        };
    }

    loadTodoItems = () => {
        this.props.dispatch(loadTodoItems(this.props.userDetails));
        this.setState({
            isLoaded: true,
        });
    };

    componentDidMount() {
        this.loadTodoItems();
    }

    render() {
        const { isLoaded } = this.state;

        return (
            <div>
                <AddTodo />
                {isLoaded && <ToDoList />}
            </div>
        );
    }
}

export default connect((state) => {
    return {
        userDetails: state.user,
    };
})(index);
