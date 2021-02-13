import React, { Component } from 'react';
import { connect } from 'react-redux';

class index extends Component {
    render() {
        return <div>About</div>;
    }
}

export default connect()(index);
