import React from "react";

import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        var sectionStyle = {
            width: "100%",
            height: "400px",
           
        };
    }

    render() {
        return (
            <>
                <nav class="navbar navbar-expand-lg navbar-secondary bg-dark">
                    <div class="container cle" style={this.sectionStyle}>
                        <NavLink class="nav-link" to="/">
                            
                        </NavLink>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div
                            class="collapse navbar-collapse float-end"
                            id="navbarNav"
                        >
                            <ul class="navbar-nav">
                                
                                <li class="nav-item px-2">
                                    <NavLink class="nav-link" to="/Booking">
                                        Favo
                                    </NavLink>
                                </li>
                                <li class="nav-item px-2">
                                    <NavLink class="nav-link" to="/ContactUs">
                                        Contact Us
                                    </NavLink>
                                </li>
                                <li class="nav-item px-2">
                                    <NavLink class="nav-link" to="/Login">
                                        Login
                                    </NavLink>
                                </li>
                                <li class="nav-item px-2">
                                    <NavLink class="nav-link" to="/MyBookings">
                                        My Bookings
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;
