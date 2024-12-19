import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyApplicationsVisas = () => {
    const applications = useLoaderData();
    const [applicationVisa, setApplicationVisa] = useState(applications)


    const handleCancel = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://visa-navigator-server-lac.vercel.app/my-applications/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Visa has been deleted.",
                                icon: "success"
                            });
                            setApplicationVisa(applicationVisa.filter(visa => visa._id !== id))
                        }
                    })
            }
        });
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-center mb-4">My Visa Application </h1>
            {
                applicationVisa.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {
                        applicationVisa.map((visa) => (
                            <div key={visa._id} className="card shadow-lg">
                                <img src={visa.countryImage} alt={visa.countryName} className="w-full h-40" />
                                <div className="p-4 flex flex-col gap-1">
                                    <h2 className="text-xl font-semibold">{visa.countryName}</h2>
                                    <p>Visa Type: {visa.visaType}</p>
                                    <p>Processing Time: {visa.processingTime} days</p>
                                    <p>Fee: ${visa.fee}</p>
                                    <p>Validity: {visa.validity} days</p>
                                    <p>Application Method: {visa.applicationMethod}</p>
                                    <p> Apply Date: {visa.appliedDate}</p>
                                    <p>Applicant's Name: {visa.name}</p>
                                    <p>Applicant's  Email: {visa.email}</p>
                                    <div className="my-5 flex justify-center gap-2">
                                        <button
                                            className="btn btn-sm btn-error"
                                            onClick={() => handleCancel(visa._id)}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div> : <h2>No data</h2>
            }
        </div>
    );
};

export default MyApplicationsVisas;