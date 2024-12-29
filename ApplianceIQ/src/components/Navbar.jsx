import React from 'react';
import '../assets/styles/Navbar.css';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>ApplianceIQ</h1>
            </div>
            <div className="navbar-links">
                <a href="/">Home</a>
                <a href="/contact">Contact Appliance Technician</a>
            </div>
        </nav>
    );
};

export default Navbar;