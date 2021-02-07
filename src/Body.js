import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Topbar from './components/Topbar';

export class Body extends Component {
    render() {
        const { token } = this.props;

        return (
            <div>
                {token ? (
                    <Fragment>
                        <Topbar />
                    </Fragment>
                ) : (
                    <Fragment>
                        <Redirect to="/signin" />
                    </Fragment>
                )}
            </div>
        );
    }
}

export default connect((state) => {
    return {
        token: state.auth.token,
    };
})(Body);
