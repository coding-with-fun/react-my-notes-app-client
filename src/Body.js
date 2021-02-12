import React, { Component, Fragment } from 'react';
import Topbar from './components/Topbar';
import AuthenticatedRoutes from './Routes/AuthenticatedRoutes';
import UnauthenticatedRoutes from './Routes/UnauthenticatedRoutes';

export class Body extends Component {
    render() {
        const { token } = this.props;

        return (
            <div>
                {token && (
                    <Fragment>
                        {token ? (
                            <Fragment>
                                <Topbar />
                                <AuthenticatedRoutes />
                            </Fragment>
                        ) : (
                            <UnauthenticatedRoutes />
                        )}
                    </Fragment>
                )}
            </div>
        );
    }
}

export default Body;
