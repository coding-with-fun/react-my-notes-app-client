import React, { Component } from 'react';
import { userSignIn } from '../../api/auth.api';

export class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            userPassword: '',
            isValid: false,
        };
    }

    handleUserSignIn = async () => {
        const { username, userPassword } = this.state;
        const body = {
            username,
            password: userPassword,
        };

        this.setState({
            username: '',
            userPassword: '',
            isValid: false,
        });

        userSignIn(body)
            .then((res) => console.log(res))
            .catch((err) => console.log(err.response.data));
    };

    handleInput = (e) => {
        const { username, userPassword } = this.state;
        this.setState(
            {
                [e.target.name]: e.target.value,
            },
            () => {
                if (username && userPassword) {
                    this.setState({
                        isValid: true,
                    });
                }
            }
        );
    };

    render() {
        const { username, userPassword, isValid } = this.state;

        return (
            <div className="signin_form container">
                <h1 className="mb-5">Sign In</h1>

                <form className="row g-3 signin_form__container">
                    <div className="col">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            value={username}
                            autoFocus
                            onChange={(e) => this.handleInput(e)}
                        />
                    </div>

                    <div className="col">
                        <label htmlFor="inputPassword" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="userPassword"
                            name="userPassword"
                            value={userPassword}
                            onChange={(e) => this.handleInput(e)}
                        />
                    </div>
                </form>

                <button
                    type="button"
                    className="signin_button mt-5 btn btn-primary"
                    onClick={() => this.handleUserSignIn()}
                    disabled={!isValid}>
                    Sign In
                </button>
            </div>
        );
    }
}

export default SignIn;
