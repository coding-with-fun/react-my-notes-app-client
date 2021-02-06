import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { loadTodoItems } from "../../actions/userDataActions";

class index extends Component {
    loadTodoItems = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
                this.props.dispatch(loadTodoItems(res.data));
            })
            .catch((err) => console.log(err));
    };

    componentDidMount() {
        this.loadTodoItems();
    }

    render() {
        return (
            <div>
                <h1>ToDo</h1>
                {console.log(this.props.todoItems)}
            </div>
        );
    }
}

export default connect((state) => {
    return {
        todoItems: state.userData.todoList,
    };
})(index);
