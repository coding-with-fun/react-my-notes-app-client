import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Topbar extends Component {
    render() {
        const navLinks = [
            {
                title: "Home",
                path: "/",
            },
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
                            {navLinks.map((link) => {
                                return (
                                    <Link
                                        id={link.title}
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
