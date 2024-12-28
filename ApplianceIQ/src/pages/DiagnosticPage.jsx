import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Washer from '../assets/images/washing_machine.png';
import Dryer from '../assets/images/clothes_dryer.png';
import Refrigerator from '../assets/images/refrigerator.png';
import Dishwasher from '../assets/images/dishwasher.png';
import Range from '../assets/images/range.png';
import Microwave from '../assets/images/microwave.png';
import '../assets/styles/DiagnosticPage.css';
import Navbar from '../components/Navbar';

const troubleshootingSteps = {
    1: {
        name: "Washer",
        image: Washer,
        types: {
            topload: [
                "Check the power cord is securely plugged in.",
                "Verify the lid is fully closed.",
                "Check for unbalanced loads.",
                "Clean the filter at the bottom of the tub.",
                "Inspect the agitator for damage.",
            ],
            frontload: [
                "Ensure the washer is level and stable.",
                "Check the door latch mechanism.",
                "Clean the rubber door seal.",
                "Run a drain and spin cycle test.",
                "Check the drain pump filter.",
            ],
        },
    },
    2: {
        name: "Dryer",
        image: Dryer,
        steps: [
            "Ensure the dryer is plugged in and the circuit breaker is on.",
            "Clean the lint filter and exhaust vent.",
            "Verify that the door switch is working properly.",
            "Check for unusual noises or burning smells.",
            "Inspect the heating element for damage.",
        ],
    },
    3: {
        name: "Refrigerator",
        image: Refrigerator,
        steps: [
            "Ensure the refrigerator is plugged in and the outlet works.",
            "Check the temperature settings in the control panel.",
            "Clean the condenser coils for better efficiency.",
            "Verify that the door seals are tight and not leaking.",
            "Listen for unusual noises from the compressor or fan.",
        ],
    },
    4: {
        name: "Dishwasher",
        image: Dishwasher,
        steps: [
            "Make sure the dishwasher is connected to the power source.",
            "Clean the spray arms and the filter.",
            "Check that the water supply line is not blocked.",
            "Inspect the door gasket for leaks or damage.",
            "Run a rinse cycle to see if the issue persists.",
        ],
    },
    5: {
        name: "Range",
        image: Range,
        types: {
            gas: [
                "Verify the gas supply valve is open.",
                "Inspect the burner caps for clogs.",
                "Test the igniters for proper sparking.",
                "Check for gas leaks using soapy water.",
                "Ensure the oven pilot light is lit.",
            ],
            electric: [
                "Inspect the heating elements for continuity.",
                "Check for tripped circuit breakers.",
                "Test the range control knobs.",
                "Clean the burner receptacles.",
                "Verify the oven temperature sensor is working.",
            ],
        },
    },
    6: {
        name: "Microwave",
        image: Microwave,
        steps: [
            "Ensure the microwave is plugged in and the door is fully closed.",
            "Test if the display or buttons are responsive.",
            "Check for unusual noises during operation.",
            "Clean the microwave thoroughly and remove any debris.",
            "Test with a cup of water to check if it heats up.",
        ],
    },
};

const DiagnosticPage = () => {
    const { applianceId, type } = useParams();
    const navigate = useNavigate();
    const appliance = troubleshootingSteps[parseInt(applianceId)];
    const steps = type ? appliance?.types?.[type] : appliance?.steps;

    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    if (!appliance || (type && !steps)) {
        return (
            <div className="diagnostic-not-found">
                <h1>Appliance or Type Not Found</h1>
                <p>Please go back and select a valid option.</p>
            </div>
        );
    }

    const handleNext = () => {
        if (currentStepIndex < steps.length) {
            setCurrentStepIndex((prev) => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStepIndex > 0) {
            setCurrentStepIndex((prev) => prev - 1);
        }
    };

    const handleRestart = () => {
        setCurrentStepIndex(0);
    };

    const handleBack = () => {
        navigate(-1);
    };

    const progressPercentage = ((currentStepIndex + 1) / (steps.length || 1)) * 100;

    return (
        <>
            <Navbar />
            <div className="diagnostic-container">
                <h1>{appliance.name} Diagnostic</h1>
                <img src={appliance.image} alt={`${appliance.name}`} className="diagnostic-image" />
                <h2 id="steps-title">{type ? `${type.charAt(0).toUpperCase() + type.slice(1)} Steps` : "General Steps"}</h2>

                <div className="progress-bar">
                    <div
                        className="progress-bar-fill"
                        style={{ width: `${progressPercentage}%` }}
                    ></div>
                </div>

                {currentStepIndex < steps.length ? (
                    <div className="diagnostic-step">
                        {steps[currentStepIndex]}
                    </div>
                ) : (
                    <div className="diagnostic-complete">
                        <h3>Diagnostic Complete!</h3>
                        <p>Congratulations! All steps have been completed.</p>
                    </div>
                )}

                <div className="button-container">
                    <button onClick={handlePrevious} disabled={currentStepIndex === 0}>
                        Previous
                    </button>
                    {currentStepIndex < steps.length ? (
                        <button onClick={handleNext}>Next</button>
                    ) : (
                        <button onClick={handleRestart}>Restart</button>
                    )}
                    <button onClick={handleBack} id='back'>Back</button>
                </div>
            </div>
        </>
    );
};

export default DiagnosticPage;