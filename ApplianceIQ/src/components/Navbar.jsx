import React from 'react';
import '../assets/styles/Navbar.css';
import { Link } from 'react-router-dom';
//testing

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>ApplianceIQ</h1>
            </div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/contact">Contact Appliance Technician</Link>
            </div>
        </nav>
    );
};

export default Navbar;