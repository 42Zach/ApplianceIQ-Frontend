import React from 'react';
import '../assets/styles/ContactPage.css';
import Navbar from '../components/Navbar';
import JohnsonPic from '../assets/images/JohnsonAppliance.jpg';

const ContactPage = () => {
    return (
        <>
            <Navbar />
            <div className="contact-container">
                <h1 className='contact-title'>Contact Appliance Technician</h1>
                <img src={JohnsonPic} alt="Johnson Appliance Service" id='JohnsonPic' />
                <div className="contact-details">
                    <h2>Johnson Appliance Service</h2>
                    <p>
                        <strong>Phone:</strong> <a href="tel:+14063633592">(406) 363-3592</a>
                    </p>
                    <p>
                        <strong>Facebook:</strong>{' '}
                        <a
                            href="https://www.facebook.com/johnsonapp/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Johnson Appliance Service
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default ContactPage;