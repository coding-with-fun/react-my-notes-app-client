import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userNameValue: '',
            userPasswordValue: '',
        };
    }

    handleUserInput = (e) => {
        const value = e.target.value;

        this.setState({
            [e.target.name]: value,
        });
    };

    render() {
        const { userNameValue, userPasswordValue } = this.state;

        return (
            <div className="auth_form__container container">
                <div className="auth_form__heading">
                    <div className="heading__content">Sign Up</div>
                </div>

                <form action="" className="row auth_form">
                    <div className="col-md-12">
                        <label htmlFor="user_name" className="form-label">
                            Username
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={userNameValue}
                            name="userNameValue"
                            id="user_name"
                            autoFocus
                            autoComplete={userNameValue}
                            onChange={(e) => this.handleUserInput(e)}
                        />
                    </div>

                    <div className="col-md-12">
                        <label htmlFor="user_password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            value={userPasswordValue}
                            name="userPasswordValue"
                            id="user_password"
                            autoComplete={userPasswordValue}
                            onChange={(e) => this.handleUserInput(e)}
                        />
                    </div>

                    <div className="col-md-12 auth_form__submit">
                        <button type="submit" className="btn btn-primary">
                            Sign Up
                        </button>
                    </div>
                </form>

                <div className="route_to_signup">
                    <span>
                        Don't have an account?{' '}
                        <span className="route_link">Sign In</span>
                    </span>
                </div>
            </div>
        );
    }
}

export default SignUp;
