import React from 'react';

const Section2 = () => {
    return (
        <div className="mt-12 bg-base-200 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                    <div className="text-4xl mb-4">📋</div>
                    <h3 className="font-bold text-lg">Step 1: Check Requirements</h3>
                    <p>Browse detailed visa requirements for various destinations.</p>
                </div>
                <div className="text-center">
                    <div className="text-4xl mb-4">📝</div>
                    <h3 className="font-bold text-lg">Step 2: Apply Online</h3>
                    <p>Submit your application using our secure online form.</p>
                </div>
                <div className="text-center">
                    <div className="text-4xl mb-4">✅</div>
                    <h3 className="font-bold text-lg">Step 3: Track Progress</h3>
                    <p>Monitor the status of your application in real-time.</p>
                </div>
            </div>
        </div>

    );
};

export default Section2;