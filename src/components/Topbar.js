import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { userSignOut } from '../actions/authenticationActions';
import { switchTabs } from '../actions/togglePageActions';

class Topbar extends Component {
    handleUserSignOut = () => {
        this.props.dispatch(userSignOut());
    };

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand">
                            My{' '}
                            {this.props.currentTab === 'notes'
                                ? 'Notes'
                                : 'ToDo'}
                        </Link>
                        <div>
                            <Link
                                to="/"
                                className="navbar-brand"
                                onClick={() =>
                                    this.props.dispatch(switchTabs())
                                }>
                                {this.props.currentTab === 'notes'
                                    ? 'ToDo'
                                    : 'Notes'}
                            </Link>
                            {this.props.location.pathname !== '/about' && (
                                <Link className="navbar-brand" to={'/about'}>
                                    About
                                </Link>
                            )}
                            {this.props.location.pathname !== '/' && (
                                <Link className="navbar-brand" to={'/'}>
                                    Home
                                </Link>
                            )}
                            {this.props.isAuthenticated && (
                                <Link
                                    className="navbar-brand"
                                    to={'/'}
                                    onClick={() => this.handleUserSignOut()}>
                                    Sign Out
                                </Link>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        currentTab: state.toggleTab.tab,
        isAuthenticated: state.auth.isAuthenticated,
    };
})(withRouter(Topbar));
