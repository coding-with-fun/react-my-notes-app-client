import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class SignIn extends Component {
    render() {
        return (
            <div>
                <h1>Sign In</h1>

                <Link to="/signup">Sign Up</Link>
            </div>
        );
    }
}

export default SignIn;
