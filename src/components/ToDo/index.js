import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTodo from './AddTodo';
import ToDoList from './ToDoList';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <AddTodo />
                <ToDoList />
            </div>
        );
    }
}

export default connect((state) => {
    return {
        userDetails: state.user,
    };
})(index);
