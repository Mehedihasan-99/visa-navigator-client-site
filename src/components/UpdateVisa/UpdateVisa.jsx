import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const UpdateVisa = () => {

    const visa = useLoaderData();
    const { user } = useContext(AuthContext)
    const [requiredDocuments, setRequiredDocuments] = useState(visa.requiredDocuments || []);
    const navigate = useNavigate();

    const { _id, email, countryImage, countryName, visaType, processingTime, description, ageRestriction, fee, validity, applicationMethod } = visa;
    console.log(visa)

    const documentOptions = [
        "Valid passport",
        "Visa application form",
        "Recent passport-sized photograph",
    ];


    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;

        setRequiredDocuments((prev) => {
            const updatedDocs = new Set(prev);
            if (checked) {
                updatedDocs.add(value);
            } else {
                updatedDocs.delete(value);
            }
            return Array.from(updatedDocs);
        });
    };

    const handleUpdateVisa = (e) => {
        e.preventDefault();
        const form = e.target;
        const countryImage = form.countryImage.value;
        const countryName = form.countryName.value;
        const visaType = form.visaType.value;
        const processingTime = form.processingTime.value;
        const description = form.description.value;
        const ageRestriction = form.ageRestriction.value;
        const fee = form.fee.value;
        const validity = form.validity.value;
        const applicationMethod = form.applicationMethod.value;
        const email = user?.email || ""

        const updateVisa = { email, countryImage, countryName, visaType, processingTime, requiredDocuments, description, ageRestriction, fee, validity, applicationMethod };

        console.log(updateVisa)
        // add to database 
        fetch(`http://localhost:8000/all-visas/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateVisa)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Visa updated successfully!',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    });
                    navigate('/my-added-visas'); // Redirect to a relevant page after success
                } else {
                    Swal.fire({
                        title: 'No Changes!',
                        text: 'No modifications detected.',
                        icon: 'info',
                        confirmButtonText: 'Close'
                    });
                }
            })
            .catch(error => {
                console.error("Error updating visa:", error);
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to update visa. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'Close'
                });
            });

    };

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-md">
            <h2 className="text-3xl text-center font-bold mb-6">{countryName}</h2>
            <form onSubmit={handleUpdateVisa}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Country Image URL</label>
                    <input
                        type="text"
                        name="countryImage"
                        placeholder="Enter image URL"
                        defaultValue={countryImage}
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Country Name</label>
                    <input
                        type="text"
                        name="countryName"
                        placeholder="Enter country name"
                        defaultValue={countryName}
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Visa Type</label>
                    <select
                        name="visaType"
                        className="select select-bordered w-full"
                        defaultValue={visaType}
                        required
                    >
                        <option value="Tourist visa">Tourist visa</option>
                        <option value="Student visa">Student visa</option>
                        <option value="Official visa">Official visa</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Processing Time</label>
                    <input
                        type="text"
                        name="processingTime"
                        placeholder="e.g., 10-15 days"
                        defaultValue={processingTime}
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Required Documents</label>
                    {documentOptions.map((doc, index) => (
                        <div key={index} className="flex items-center">
                            <input
                                type="checkbox"
                                value={doc}
                                checked={requiredDocuments.includes(doc)}
                                onChange={handleCheckboxChange}
                                className="checkbox checkbox-primary mr-2"
                            />

                            <label>{doc}</label>
                        </div>
                    ))}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <textarea
                        name="description"
                        placeholder="Add description"
                        defaultValue={description}
                        className="textarea textarea-bordered w-full"
                    ></textarea>
                </div>
                <div className="mb-4 grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">Age Restriction</label>
                        <input
                            type="text"
                            name="ageRestriction"
                            placeholder="e.g., 18"
                            defaultValue={ageRestriction}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Fee</label>
                        <input
                            type="number"
                            name="fee"
                            placeholder="e.g., 150"
                            defaultValue={fee}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Validity</label>
                    <input
                        type="text"
                        name="validity"
                        placeholder="e.g., 6 months"
                        defaultValue={validity}
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Application Method</label>
                    <input
                        type="text"
                        name="applicationMethod"
                        placeholder="e.g., Online"
                        defaultValue={applicationMethod}
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                    Update Visa
                </button>
            </form>
        </div>
    );
};

export default UpdateVisa;