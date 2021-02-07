import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Topbar from './components/Topbar';

export class Body extends Component {
    render() {
        return (
            <div>
                <Topbar />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default Body;
