import { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { setCurrentUser } from './actions/authenticationActions';
import WrappedRouter from './WrappedRouter';

function App({ isAuthenticated, dispatch }) {
    const localToken = localStorage.getItem('user_token');

    useEffect(() => {
        if (!isAuthenticated && localToken) {
            dispatch(setCurrentUser(localToken));
        }
        // eslint-disable-next-line
    }, [isAuthenticated, localToken]);

    return (
        <Router>
            <WrappedRouter />
        </Router>
    );
}

export default connect((state) => {
    return {
        token: state.auth.token,
        isAuthenticated: state.auth.isAuthenticated,
    };
})(App);
