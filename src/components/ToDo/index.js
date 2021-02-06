import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { loadTodoItems } from "../../actions/userDataActions";
import AddTodo from "./AddTodo";

class index extends Component {
    loadTodoItems = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
                this.props.dispatch(loadTodoItems(res.data.slice(0, 10)));
            })
            .catch((err) => console.log(err));
    };

    componentDidMount() {
        this.loadTodoItems();
    }

    render() {
        return (
            <div>
                <AddTodo />
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
