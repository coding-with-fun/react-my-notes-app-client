import axios from 'axios';
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
        axios
            .get('https://jsonplaceholder.typicode.com/todos')
            .then((res) => {
                this.props.dispatch(loadTodoItems(res.data.slice(0, 10)));
                this.setState({
                    isLoaded: true,
                });
            })
            .catch((err) => console.error(err));
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

export default connect()(index);
