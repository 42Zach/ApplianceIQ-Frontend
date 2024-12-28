import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../assets/styles/TypeSelectionPage.css'
import Navbar from '../components/Navbar';

const typeOptions = {
    1: ["Topload", "Frontload"],
    5: ["Gas", "Electric"],
};

const TypeSelectionPage = () => {
    const { applianceId } = useParams();
    const navigate = useNavigate();

    const handleTypeSelect = (type) => {
        navigate(`/diagnostic/${applianceId}/${type.toLowerCase()}`);
    };
    const options = typeOptions[applianceId] || [];

    return (
        <>
            <Navbar />
            <div className="type-selection-container">
                <h1 className='type-selection-title'>Select Type</h1>
                <div className="type-options">
                    {options.map((type) => (
                        <button
                            key={type}
                            onClick={() => handleTypeSelect(type)}
                            className="type-button"
                            id='type-button'
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TypeSelectionPage;