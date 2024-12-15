import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllVisas = () => {

    const allVisas = useLoaderData()

    return (
        <div>
            <h2 className='text-center font-bold text-4xl mb-10'> All Visa : {allVisas.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4'>
                {
                    allVisas.map(visa => <div key={visa._id} className="card card-compact bg-base-100 shadow-xl">
                        <img
                            src={visa.countryImage}
                            alt=""
                            className='w-full h-40 rounded-t-xl' />
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold">{visa.countryName}</h2>
                            <h2 className="card-title text-sm text-gray-400"><span className='font-bold text-black'>Visa Type:</span>{visa.visaType}</h2>
                            <h2 className="card-title text-sm text-gray-400"><span className='font-bold text-black'>Visa Validity:</span>{visa.validity}.</h2>
                        </div>
                        <div className="card-actions justify-center pb-4">
                            <button className="btn btn-primary" ><Link to={`/visa/details/${visa._id}`}>See Details</Link></button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllVisas;