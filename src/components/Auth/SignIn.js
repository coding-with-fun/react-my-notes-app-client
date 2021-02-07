import React, { Component } from 'react';

export class SignIn extends Component {
    render() {
        return (
            <div className="signin_form container">
                <h1 className="mb-5">Sign In</h1>

                <form className="row g-3 signin_form__container">
                    <div className="col">
                        <label for="username" className="form-label">
                            Username
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="username"
                        />
                    </div>

                    <div className="col">
                        <label for="inputPassword" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword"
                        />
                    </div>
                </form>

                <div className="signin_button mt-5">Sign In</div>
            </div>
        );
    }
}

export default SignIn;
