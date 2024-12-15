import React from 'react';
import Banner from '../Banner/Banner';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Section1 from '../ExtraSection/Section1';
import Section2 from '../ExtraSection/Section2';

const Home = () => {
    const allVisas = useLoaderData();
    const navigate = useNavigate()

    const handleSeeDetails = (id) => {
        navigate(`/visa/details/${id}`);
      };

    return (
        <div className="container mx-auto flex flex-col gap-5 py-8">
            <Banner></Banner>
            <h2 className="text-2xl font-bold mb-6 text-center">Latest Visas</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allVisas.slice(-6).reverse().map((visa) => (
                    <div
                        key={visa._id}
                        className="card border rounded-lg shadow-lg p-4 bg-white"
                    >
                        <img
                            src={visa.countryImage}
                            alt={visa.countryName}
                            className="w-full h-[150px] object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{visa.countryName}</h3>
                            <p>
                                <strong>Visa Type:</strong> {visa.visaType}
                            </p>
                            <p>
                                <strong>Processing Time:</strong> {visa.processingTime} days.
                            </p>
                            <p>
                                <strong>Fee:</strong> {visa.fee} $
                            </p>
                            <p>
                                <strong>Validity:</strong> {visa.validity} .
                            </p>
                            <p>
                                <strong>Application Method:</strong> {visa.applicationMethod}
                            </p>
                            <button
                                onClick={() => handleSeeDetails(visa._id)}
                                className="btn btn-primary mt-4 w-full"
                            >
                                See Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center">
            <button className="btn btn-accent"><Link to="/all-visas">See All Visas</Link></button>
            </div>
            <Section1/>
            <Section2/>
        </div>
    );
};

export default Home;