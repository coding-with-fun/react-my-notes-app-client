import React, { Component } from 'react';
import { connect } from 'react-redux';

class index extends Component {
    render() {
        return (
            <div>
                <h1>Notes</h1>
            </div>
        );
    }
}

export default connect()(index);
