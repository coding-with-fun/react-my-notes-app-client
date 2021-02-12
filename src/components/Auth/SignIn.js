import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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

            responseMessage: {
                message: '',
                status: null,
            },
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
        });

        userSignIn(body)
            .then((res) => {
                console.log(res.data);
                localStorage.setItem('user_token', res.data.data.token);
                this.setState(
                    {
                        invalidUsername: false,
                        invalidPassword: false,
                        loading: false,
                    },
                    () => {
                        this.handleRouting();
                    }
                );
            })
            .catch((err) => {
                console.log(err.response.data.data);
                this.setState(
                    {
                        invalidUsername: true,
                        invalidPassword: true,
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
            responseMessage: {
                message: '',
                status: null,
            },
        });
    };

    handleRouting = () => {
        this.props.history.push('/signup');
    };

    render() {
        const {
            username,
            usernameHelpText,
            invalidUsername,

            userPassword,
            passwordHelpText,
            invalidPassword,

            responseMessage,
            loading,
        } = this.state;

        return (
            <div className="signin_form container">
                {responseMessage.message && (
                    <div
                        className={`auth_alert__container alert alert-${
                            responseMessage.status ? `success` : `danger`
                        }`}
                        role="alert"
                        data-bs->
                        {responseMessage.message}
                    </div>
                )}

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

                <div className="route_link__footer">
                    Don't have an account?{' '}
                    <span onClick={() => this.handleRouting()}>Sign Up</span>
                </div>
            </div>
        );
    }
}

export default withRouter(SignIn);
