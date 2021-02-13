import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUserDetails } from './actions/userProfileActions';
import Topbar from './components/Topbar';
import AuthenticatedRoutes from './Routes/AuthenticatedRoutes';
import UnauthenticatedRoutes from './Routes/UnauthenticatedRoutes';

const WrappedRouter = ({ isAuthenticated, token, dispatch }) => {
    const handleFetchUserDetails = () => {
        token && dispatch(fetchUserDetails(token));
    };

    useEffect(() => {
        handleFetchUserDetails();
        // eslint-disable-next-line
    }, [token]);

    return (
        <div>
            <Fragment>
                {isAuthenticated ? (
                    <Fragment>
                        <Topbar />
                        <AuthenticatedRoutes />
                    </Fragment>
                ) : (
                    <UnauthenticatedRoutes />
                )}
            </Fragment>
        </div>
    );
};

export default connect((state) => {
    return {
        token: state.auth.token,
        isAuthenticated: state.auth.isAuthenticated,
    };
})(WrappedRouter);
