import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllVisas = () => {

    const allVisas = useLoaderData()
    console.log(allVisas)

    // const handleSeeDetails = (id) => {
    //     <Link to={`/all-visas/:{id}`}></Link> 
    // };
    return (
        <div>
            <h2 className='text-center font-bold text-4xl'> All Visa </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4'>
                {
                    allVisas.map(visa => <div className="card card-compact bg-base-100 shadow-xl">
                        <img
                            src={visa.countryImage}
                            alt=""
                            className=' -4 w-full h-40 rounded-t-xl' />
                        <div className="card-body">
                            <h2 className="card-title"><span className='font-bold'>Country Name:</span>{visa.countryName}</h2>
                            <h2 className="card-title"><span className='font-bold'>Visa Type:</span>{visa.visaType}</h2>
                            <h2 className="card-title"><span className='font-bold'>Visa Validity:</span>{visa.validity}</h2>

                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" ><Link to={`/all-visas/${visa._id}`}>See Details</Link></button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllVisas;