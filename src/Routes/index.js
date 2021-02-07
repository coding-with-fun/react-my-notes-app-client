import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import About from '../components/About';
import SignIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';
import Home from '../components/Home';

const index = ({ token }) => {
    return (
        <Fragment>
            {token ? (
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
            ) : (
                <Switch>
                    <Route path="/signin">
                        <SignIn />
                    </Route>

                    <Route path="/signup">
                        <SignUp />
                    </Route>
                </Switch>
            )}
        </Fragment>
    );
};

export default connect((state) => {
    return {
        token: state.auth.token,
    };
})(index);
