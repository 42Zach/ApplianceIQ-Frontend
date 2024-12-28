import React from 'react';
import { useNavigate } from 'react-router-dom';

const ApplianceCard = ({ appliance }) => {
    const navigate = useNavigate();
    const handleDiagnose = () => {
        const appliancesWithTypes = [1, 5];
        if (appliancesWithTypes.includes(appliance.id)) {
            navigate(`/type-selection/${appliance.id}`);
        } else {
            navigate(`/diagnostic/${appliance.id}`);
        }
    };

    return (
        <div className="appliance-card">
            <img src={appliance.image} alt={appliance.name} />
            <h3>{appliance.name}</h3>
            <button onClick={handleDiagnose}>Diagnose Now</button>
        </div>
    )
}

export default ApplianceCard;