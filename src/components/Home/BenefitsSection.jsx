import React from 'react';
import './BenefitsSection.css';
import { useNavigate } from "react-router-dom";
const BenefitsSection = () => {
    const navigate = useNavigate();
    return (
        <section className="benefits-section">
            <div className="container">
                <div className="benefits-content">
                    <h2 className="benefits-title">Unlock Exclusive Benefits</h2>
                    <p className="benefits-text">
                        Experience unparalleled bliss with exclusive memberships curated for your regal presence at our distinguished hotel in Hubli.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
