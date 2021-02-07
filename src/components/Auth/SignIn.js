import React, { Component } from 'react';
import { userSignIn } from '../../api/auth.api';

export class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            usernameHelpText: 'Username must be at least 5 characters long.',
            invalidUsername: true,
            userPassword: '',
            passwordHelpText: 'Password must be at least 5 characters long.',
            invalidPassword: true,
            loading: false,
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
            loading: true,
            isValid: false,
        });

        userSignIn(body)
            .then((res) => {
                console.log(res);
                this.setState({
                    loading: false,
                });
            })
            .catch((err) => {
                console.log(err.response.data);
                this.setState({
                    loading: false,
                });
            });
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

        if (username.length > 3) {
            this.setState({
                invalidUsername: false,
            });
        } else {
            this.setState({
                invalidUsername: true,
            });
        }

        if (userPassword.length > 3) {
            this.setState({
                invalidPassword: false,
            });
        } else {
            this.setState({
                invalidPassword: true,
            });
        }
    };

    render() {
        const {
            username,
            usernameHelpText,
            invalidUsername,
            userPassword,
            passwordHelpText,
            invalidPassword,
            loading,
            isValid,
        } = this.state;

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
                            aria-describedby="usernameHelp"
                            onChange={(e) => this.handleInput(e)}
                            autoFocus
                        />
                        <small
                            id="usernameHelp"
                            class={`form-text text-muted ${
                                invalidUsername ? `alertText` : `successText`
                            }`}>
                            {usernameHelpText}
                        </small>
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
                            aria-describedby="passwordHelp"
                            onChange={(e) => this.handleInput(e)}
                        />
                        <small
                            id="passwordHelp"
                            class={`form-text text-muted ${
                                invalidPassword ? `alertText` : `successText`
                            }`}>
                            {passwordHelpText}
                        </small>
                    </div>
                </form>

                <button
                    type="button"
                    className={`signin_button mt-5 btn btn-primary ${
                        loading ? `signin_loading` : `signin_success`
                    }`}
                    onClick={() => this.handleUserSignIn()}
                    disabled={!isValid}>
                    {loading ? (
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        <span>Sign In</span>
                    )}
                </button>
            </div>
        );
    }
}

export default SignIn;
