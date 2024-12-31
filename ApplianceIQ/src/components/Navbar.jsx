import React from 'react';
import '../assets/styles/Navbar.css';
//testing

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>ApplianceIQ</h1>
            </div>
            <div className="navbar-links">
                <a href="/">Home</a>
                <Link to="/contact">Contact Appliance Technician</Link>
                {/* <a href="/contact">Contact Appliance Technician</a> */}
            </div>
        </nav>
    );
};

export default Navbar;