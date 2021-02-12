import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { userSignUp } from '../../api/auth.api';

export class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            nameHelpText: "Name can't be empty",
            invalidName: true,

            username: '',
            usernameHelpText: 'Username must be at least 5 characters long.',
            invalidUsername: true,

            userPassword: '',
            passwordHelpText: 'Password must be at least 5 characters long.',
            invalidPassword: true,

            userConfirmPassword: '',
            confirmPasswordHelpText:
                'Password must be at least 5 characters long.',
            invalidConfirmPassword: true,

            responseMessage: {
                message: '',
                status: null,
            },
            loading: false,
        };
    }

    handleUserSignUp = async () => {
        const {
            name,
            username,
            userPassword,
            userConfirmPassword,
        } = this.state;
        const body = {
            name,
            username,
            password: userPassword,
            confirmPassword: userConfirmPassword,
        };
        this.setState({
            name: '',
            username: '',
            userPassword: '',
            userConfirmPassword: '',
            loading: true,
        });

        userSignUp(body)
            .then((res) => {
                console.log(res);
                this.setState(
                    {
                        invalidName: true,
                        invalidUsername: true,
                        invalidPassword: true,
                        invalidConfirmPassword: true,
                        loading: false,
                        responseMessage: {
                            message: res.message,
                            status: true,
                        },
                    },
                    () => {
                        setTimeout(() => {
                            this.setState({
                                responseMessage: {
                                    message: '',
                                    status: null,
                                },
                            });
                        }, 5000);
                    }
                );
            })
            .catch((err) => {
                console.log(err.response.data.data);
                this.setState(
                    {
                        invalidName: true,
                        invalidUsername: true,
                        invalidPassword: true,
                        invalidConfirmPassword: true,
                        loading: false,
                        responseMessage: {
                            message: err.response.data.data.message,
                            status: false,
                        },
                    },
                    () => {
                        setTimeout(() => {
                            this.setState({
                                responseMessage: {
                                    message: '',
                                    status: null,
                                },
                            });
                        }, 5000);
                    }
                );
            });
    };

    handleInput = (e) => {
        if (e.target.name === 'name') {
            this.setState({
                invalidName: e.target.value.length < 1,
            });
        } else if (e.target.name === 'username') {
            this.setState({
                invalidUsername: e.target.value.length < 5,
            });
        } else if (e.target.name === 'userPassword') {
            this.setState({
                invalidPassword: e.target.value.length < 5,
            });
        } else if (e.target.name === 'userConfirmPassword') {
            this.setState({
                invalidConfirmPassword: e.target.value.length < 5,
            });
        }

        this.setState({
            [e.target.name]: e.target.value,
            responseMessage: {
                message: '',
                status: null,
            },
        });
    };

    handleRouting = () => {
        this.props.history.push('/signin');
    };

    render() {
        const {
            name,
            nameHelpText,
            invalidName,

            username,
            usernameHelpText,
            invalidUsername,

            userPassword,
            passwordHelpText,
            invalidPassword,

            userConfirmPassword,
            confirmPasswordHelpText,
            invalidConfirmPassword,

            responseMessage,
            loading,
        } = this.state;

        return (
            <div className="signin_form container">
                {responseMessage.message && (
                    <div
                        className={`auth_alert__container alert alert-${
                            responseMessage.status ? `success` : `danger`
                        } alert-dismissible fade show`}
                        role="alert"
                        data-bs->
                        {responseMessage.message}
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close"></button>
                    </div>
                )}

                <h1 className="mb-5">Sign Up</h1>

                <form className="row g-3 signin_form__container">
                    <div className="col">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={name}
                            aria-describedby="nameHelp"
                            onChange={(e) => this.handleInput(e)}
                            autoFocus
                        />
                        <small
                            id="nameHelp"
                            className={`form-text text-muted ${
                                invalidName ? `alertText` : `successText`
                            }`}
                            style={{
                                opacity: name.length > 0 && invalidName ? 1 : 0,
                            }}>
                            {nameHelpText}
                        </small>
                    </div>

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
                        />
                        <small
                            id="usernameHelp"
                            className={`form-text text-muted ${
                                invalidUsername ? `alertText` : `successText`
                            }`}
                            style={{
                                opacity:
                                    username.length > 0 && invalidUsername
                                        ? 1
                                        : 0,
                            }}>
                            {usernameHelpText}
                        </small>
                    </div>

                    <div className="col">
                        <label htmlFor="userPassword" className="form-label">
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
                            className={`form-text text-muted ${
                                invalidPassword ? `alertText` : `successText`
                            }`}
                            style={{
                                opacity:
                                    userPassword.length > 0 && invalidPassword
                                        ? 1
                                        : 0,
                            }}>
                            {passwordHelpText}
                        </small>
                    </div>

                    <div className="col">
                        <label
                            htmlFor="userConfirmPassword"
                            className="form-label">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="userConfirmPassword"
                            name="userConfirmPassword"
                            value={userConfirmPassword}
                            aria-describedby="confirmPasswordHelp"
                            onChange={(e) => this.handleInput(e)}
                        />
                        <small
                            id="confirmPasswordHelp"
                            className={`form-text text-muted ${
                                invalidConfirmPassword
                                    ? `alertText`
                                    : `successText`
                            }`}
                            style={{
                                opacity:
                                    userConfirmPassword.length > 0 &&
                                    invalidConfirmPassword
                                        ? 1
                                        : 0,
                            }}>
                            {confirmPasswordHelpText}
                        </small>
                    </div>
                </form>

                <button
                    type="button"
                    className={`signin_button mt-5 btn btn-primary ${
                        loading ? `signin_loading` : `signin_success`
                    }`}
                    onClick={() => this.handleUserSignUp()}
                    disabled={
                        invalidName ||
                        invalidUsername ||
                        invalidPassword ||
                        invalidConfirmPassword
                    }>
                    {loading ? (
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        <span>Sign Up</span>
                    )}
                </button>

                <div className="route_link__footer">
                    Already have an account?{' '}
                    <span onClick={() => this.handleRouting()}>Sign In</span>
                </div>
            </div>
        );
    }
}

export default withRouter(SignUp);
