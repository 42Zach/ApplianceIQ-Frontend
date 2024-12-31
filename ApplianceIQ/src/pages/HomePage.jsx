import React, { useState, useEffect } from 'react';
import ApplianceCard from '../components/ApplianceCard';
import '../assets/styles/HomePage.css';
import Navbar from '../components/Navbar';

const API_BASE_URL = process.env.REACT_APP_BACKEND_API;
console.log("Backend API URL:", process.env.REACT_APP_BACKEND_API);

const HomePage = () => {
    const [appliances, setAppliances] = useState([]);

    useEffect(() => {
        const fetchAppliances = async () => {
            // http://localhost:8080/api/appliances
                // + '/api/appliances'
            try {
                const response = await fetch(API_BASE_URL);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setAppliances(data);
            } catch (error) {
                console.error("Error fetching appliance data:", error);
            }
        };

        fetchAppliances();
    }, []);
    console.log("Appliance image URL:", appliance.image);

    return (
        <>
        <Navbar />
        <div className="homepage">
            <header>
                <h1 className='homepage-logo'>ApplianceIQ</h1>
                <h2 className='homepage-tagline'>Diagnosing an appliance has never been easier.</h2>
                <h3 className='homepage-subtitle'>Choose your appliance to get started.</h3>
            </header>
            <div className="appliance-grid">
                {appliances.map(appliance => (
                    <ApplianceCard 
                        key={appliance.id} 
                        appliance={{...appliance, image: `https://applianceiq-backend-production.up.railway.app${appliance.image}`}}
                    />
                ))}
            </div>
        </div>
        <div className="contact-page">
            <a href="/contact">Contact Appliance Technician</a>
        </div>
        </>
    );
};

export default HomePage;