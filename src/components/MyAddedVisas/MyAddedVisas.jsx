import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyAddedVisas = () => {
    const allVisas = useLoaderData();
    const [myAddVisa, setMyAddVisa] = useState(allVisas);

    const handleDelete = (id) => {
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
                fetch(`http://localhost:8000/all-visas/${id}`, {
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
                            setMyAddVisa(myAddVisa.filter(visa =>
                                visa._id !== id))
                        }
                    })
            }
        });
    };


    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-center mb-4">My Added Visas : {allVisas.length}</h1>
            {
                    allVisas.length < 1 ? <h2>No data</h2> : ""
                }
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                    myAddVisa.map((visa) => (
                        <div key={visa._id} className="card shadow-lg">
                            <img src={visa.countryImage} alt={visa.countryName} className="w-full h-40" />
                            <div className="p-4">
                                <h2 className="text-2xl pb-2 font-semibold">{visa.countryName}</h2>
                                <p><strong>Visa Type:</strong> {visa.visaType}.</p>
                                <p><strong>Processing Time:</strong> {visa.processingTime} days.</p>
                                <p><strong>Fee:</strong> ${visa.fee}</p>
                                <p><strong>Validity:</strong> {visa.validity}</p>
                                <p><strong>Application Method:</strong> {visa.applicationMethod}.</p>
                                <div className="mt-4 flex gap-2">
                                    <button
                                        className="btn btn-sm btn-warning"
                                    >
                                        <Link to={`/update-visa/${visa._id}`}>Update</Link>
                                    </button>
                                    <button
                                        className="btn btn-sm btn-error"
                                        onClick={() => handleDelete(visa._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default MyAddedVisas;
