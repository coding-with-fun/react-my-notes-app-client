import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { switchTabs } from "../actions/togglePageActions";

class Topbar extends Component {
    render() {
        const navLinks = [
            {
                title: "About",
                path: "/about",
            },
        ];

        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand">
                            My Notes
                        </Link>
                        <div>
                            <Link
                                to="/"
                                className="navbar-brand"
                                onClick={() =>
                                    this.props.dispatch(switchTabs())
                                }
                            >
                                {this.props.currentTab === "notes"
                                    ? "ToDo"
                                    : "Notes"}
                            </Link>
                            {navLinks.map((link) => {
                                return (
                                    <Link
                                        key={link.title}
                                        className="navbar-brand"
                                        to={link.path}
                                    >
                                        {link.title}
                                    </Link>
                                );
                            })}
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
    };
})(Topbar);
