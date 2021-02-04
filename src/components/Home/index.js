import React, { Component } from "react";
import { connect } from "react-redux";
import Notes from "../Notes";
import ToDo from "../ToDo";

class index extends Component {
    render() {
        return this.props.currentTab === "notes" ? <Notes /> : <ToDo />;
    }
}
export default connect((state) => {
    return {
        currentTab: state.toggleTab.tab,
    };
})(index);
