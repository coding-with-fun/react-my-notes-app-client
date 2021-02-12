import { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { setCurrentUser } from './actions/authenticationActions';
import { Body } from './Body';

function App({ token, dispatch }) {
    const localToken = localStorage.getItem('user_token');
    useEffect(() => {
        if (localToken) {
            dispatch(setCurrentUser(localToken));
        }
        // eslint-disable-next-line
    }, [localToken]);

    return (
        <Router>
            <Body token={token} />
        </Router>
    );
}

export default connect((state) => {
    return {
        token: state.auth.token,
    };
})(App);
