import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddVisa = () => {

    const [requiredDocuments, setRequiredDocuments] = useState([])

    const documentOptions = [
        "Valid passport",
        "Visa application form",
        "Recent passport-sized photograph",
    ];

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        const requiredDocuments = []
        const updatedDocuments = checked
            ? [...requiredDocuments,value]
            : requiredDocuments.filter((doc) => doc !== value);

        setRequiredDocuments({ requiredDocuments: updatedDocuments });
    };


    const handleSubmit = (e) => {
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

        const addVisa = { countryImage, countryName, visaType, processingTime, requiredDocuments, description, ageRestriction, fee, validity, applicationMethod };
        console.log(addVisa)

    };

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-md">
            <h2 className="text-3xl text-center font-bold mb-6">Add Visa</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Country Image URL</label>
                    <input
                        type="text"
                        name="countryImage"
                        placeholder="Enter image URL"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Country Name</label>
                    <input
                        type="text"
                        name="countryName"
                        placeholder="Enter country name"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Visa Type</label>
                    <select
                        name="visaType"
                        className="select select-bordered w-full"
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
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Required Documents</label>
                    {documentOptions.map((doc, index) => (
                        <div key={index} className="flex items-center">
                            <input
                                type="checkbox"
                                value={doc}
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
                        className="textarea textarea-bordered w-full"
                    ></textarea>
                </div>
                <div className="mb-4 grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">Age Restriction</label>
                        <input
                            type="number"
                            name="ageRestriction"
                            placeholder="e.g., 18"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Fee</label>
                        <input
                            type="number"
                            name="fee"
                            placeholder="e.g., 150"
                            className="input input-bordered w-full"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Validity</label>
                    <input
                        type="text"
                        name="validity"
                        placeholder="e.g., 6 months"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Application Method</label>
                    <input
                        type="text"
                        name="applicationMethod"
                        placeholder="e.g., Online"
                        className="input input-bordered w-full"
                    />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                    Add Visa
                </button>
            </form>
        </div>
    );
};

export default AddVisa;
