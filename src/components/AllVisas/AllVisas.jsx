import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllVisas = () => {
    const allVisas = useLoaderData();

    const [selectedVisaType, setSelectedVisaType] = useState("All");
    const [filteredVisas, setFilteredVisas] = useState(allVisas);

    const handleFilterChange = (e) => {
        const type = e.target.value;
        setSelectedVisaType(type);

        if (type === "All") {
            setFilteredVisas(allVisas);
        } else {
            const filtered = allVisas.filter((visa) => visa.visaType === type);
        }
    };

    return (
        <div>
            <div className='flex flex-col md:flex-row justify-center md:justify-between mt-20 md:px-20'>
                <h2 className='text-center font-bold text-4xl mb-10'> All Visa : {filteredVisas.length}</h2>
                <div className="flex items-center justify-center gap-5 mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Filter by Visa Type:
                    </label>
                    <select
                        value={selectedVisaType}
                        onChange={handleFilterChange}
                        className="mt-1 block rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                        <option value="All">All</option>
                        <option value="Tourist visa">Tourist Visa</option>
                        <option value="Official visa">Official Visa</option>
                        <option value="Student visa">Student Visa</option>
                    </select>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    filteredVisas.map(visa => (
                        <div key={visa._id} className="card card-compact bg-base-100 shadow-xl">
                            <img
                                src={visa.countryImage}
                                alt=""
                                className='w-full h-40 rounded-t-xl' />
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-bold">{visa.countryName}</h2>
                                <h2 className="card-title text-sm text-gray-400">
                                    <span className='font-bold text-black'>Visa Type:</span>{visa.visaType}
                                </h2>
                                <h2 className="card-title text-sm text-gray-400">
                                    <span className='font-bold text-black'>Visa Validity:</span>{visa.validity}.
                                </h2>
                            </div>
                            <div className="card-actions justify-center pb-4">
                                <button className="btn btn-primary" >
                                    <Link to={`/visa/details/${visa._id}`}>See Details</Link>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllVisas;
