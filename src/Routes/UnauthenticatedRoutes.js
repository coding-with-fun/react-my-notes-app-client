import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SignIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';

const UnauthenticatedRoutes = () => {
    return (
        <Switch>
            <Route path="/signin">
                <SignIn />
            </Route>

            <Route path="/signup">
                <SignUp />
            </Route>

            <Route path="*">
                <Redirect to="/signin" />
            </Route>
        </Switch>
    );
};

export default UnauthenticatedRoutes;
