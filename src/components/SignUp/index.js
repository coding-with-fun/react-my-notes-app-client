import React, { Component } from 'react';

class index extends Component {
    render() {
        return (
            <div className="auth_form__container container">
                <div className="auth_form__heading">
                    <div className="heading__content">Sign Up</div>
                </div>
                <form action="" className="row auth_form">
                    <div className="col-md-12">
                        <label htmlFor="user_email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="user_email"
                        />
                    </div>

                    <div className="col-md-12">
                        <label htmlFor="user_password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="user_password"
                        />
                    </div>

                    <div class="col-md-12 auth_form__submit">
                        <button type="submit" class="btn btn-primary">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default index;
