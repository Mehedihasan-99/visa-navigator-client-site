import React, { useContext, useState } from "react";
import Swal from 'sweetalert2'
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";



const AddVisa = () => {

    const {user} = useContext(AuthContext)
    const [requiredDocuments, setRequiredDocuments] = useState([]);
    const navigate = useNavigate()

    const documentOptions = [
        "Valid passport",
        "Visa application form",
        "Recent passport-sized photograph",
    ];

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        
        if (checked) {
            setRequiredDocuments([...requiredDocuments, value]);
        }
        else{
            setRequiredDocuments(requiredDocuments.filter(option => option !== value))
        }
    };


    const handleAddVisa = (e) => {
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

        const addVisa = { email, countryImage, countryName, visaType, processingTime, requiredDocuments, description, ageRestriction, fee, validity, applicationMethod };
        console.log(addVisa)

        // add to database 
        fetch("http://localhost:8000/all-visas", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addVisa)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Visa Add Successfully',
                    icon: 'success',
                    confirmButtonText: 'Close'
                  })
            }
        })
        form.reset();
        navigate("/")
    };

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-md">
            <h2 className="text-3xl text-center font-bold mb-6">Add Visa</h2>
            <form onSubmit={handleAddVisa}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Country Image URL</label>
                    <input
                        type="text"
                        name="countryImage"
                        placeholder="Enter image URL"
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
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Visa Type</label>
                    <select
                        name="visaType"
                        className="select select-bordered w-full"
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
                            type="text"
                            name="ageRestriction"
                            placeholder="e.g., 18"
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
                        className="input input-bordered w-full"
                        required
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
