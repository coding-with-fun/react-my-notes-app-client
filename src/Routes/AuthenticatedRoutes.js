import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from '../components/About';
import Home from '../components/Home';

const AuthenticatedRoutes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/about">
                <About />
            </Route>

            <Route path="*">
                <Redirect to="/" />
            </Route>
        </Switch>
    );
};

export default AuthenticatedRoutes;
