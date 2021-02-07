import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Topbar from './components/Topbar';
import AuthenticatedRoutes from './Routes/AuthenticatedRoutes';
import UnauthenticatedRoutes from './Routes/UnauthenticatedRoutes';

export class Body extends Component {
    render() {
        const { token } = this.props;

        return (
            <div>
                {token ? (
                    <Fragment>
                        <Topbar />
                        <AuthenticatedRoutes />
                    </Fragment>
                ) : (
                    <UnauthenticatedRoutes />
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
