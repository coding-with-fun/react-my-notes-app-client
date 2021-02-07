import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from './components/About';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Home from './components/Home';
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
