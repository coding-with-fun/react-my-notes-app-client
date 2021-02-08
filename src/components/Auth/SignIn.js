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
                    invalidUsername: true,
                    invalidPassword: true,
                    loading: false,
                });
            })
            .catch((err) => {
                console.log(err.response.data.data);
                this.setState({
                    invalidUsername: true,
                    invalidPassword: true,
                    loading: false,
                });
            });
    };

    handleInput = (e) => {
        if (e.target.name === 'username') {
            this.setState({
                invalidUsername: e.target.value.length < 5,
            });
        } else if (e.target.name === 'userPassword') {
            this.setState({
                invalidPassword: e.target.value.length < 5,
            });
        }

        this.setState({
            [e.target.name]: e.target.value,
        });
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
        } = this.state;

        return (
            <div className="signin_form container">
                <div className="toast-container">
                    <div
                        className="toast d-flex align-items-center toast_message"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true">
                        <div class="toast-body">
                            Hello, world! This is a toast message.
                        </div>
                        <button
                            type="button"
                            className="btn-close ms-auto me-2"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                        />
                    </div>
                </div>

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
                    disabled={invalidUsername || invalidPassword}>
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
