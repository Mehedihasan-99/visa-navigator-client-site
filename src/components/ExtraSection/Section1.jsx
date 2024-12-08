import React from 'react';

const Section1 = () => {
    return (
        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                    <div className="text-4xl mb-4">🌍</div>
                    <h3 className="font-bold text-lg">Global Coverage</h3>
                    <p>We provide visa information for over 100 countries worldwide.</p>
                </div>
                <div className="text-center">
                    <div className="text-4xl mb-4">⚡</div>
                    <h3 className="font-bold text-lg">Fast & Reliable</h3>
                    <p>Quick application processing and updates at every step.</p>
                </div>
                <div className="text-center">
                    <div className="text-4xl mb-4">🔒</div>
                    <h3 className="font-bold text-lg">Secure Platform</h3>
                    <p>We prioritize your data privacy with advanced encryption.</p>
                </div>
            </div>
        </div>

    );
};

export default Section1;