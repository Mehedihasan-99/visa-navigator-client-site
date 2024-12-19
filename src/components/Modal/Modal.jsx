import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const Modal = ({ visa }) => {
    const { user, setShowModal } = useContext(AuthContext);
    const navigate = useNavigate();

    const email = user.email;
    const { _id, countryImage, countryName, visaType, processingTime, requiredDocuments, description, ageRestriction, fee, validity, applicationMethod } = visa;

    const newData = { _id, email, countryImage, countryName, visaType, processingTime, requiredDocuments, description, ageRestriction, fee, validity, applicationMethod }


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const name = firstName + " " + lastName;
        const appliedDate= new Date().toISOString().split('T')[0]
        const application = {...newData, name, appliedDate};
        fetch("https://visa-navigator-server-lac.vercel.app/my-application", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(application)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Visa Add Successfully',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
            })

        setShowModal(false)
        navigate('/')
    }

    return (
        <div>
            <div className="fixed inset-0 top-20 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg w-96">
                    <h2 className="text-lg text-center font-semibold mb-4 border-b-2 pb-2">Apply for Visa</h2>
                    <form onSubmit={handleSubmit} className='space-y-1'>
                        <div>
                            <label className="block font-medium mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                readOnly
                                className="w-full border rounded px-3 py-1"
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                required
                                placeholder='First Name'
                                className="w-full border rounded px-3 py-1"
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                required
                                className="w-full border rounded px-3 py-1"
                                placeholder='Last Name'
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Applied Date</label>
                            <input
                                type="date"
                                name="appliedDate"
                                readOnly
                                className="w-full border rounded px-3 py-1"
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Fee</label>
                            <input
                                type="number"
                                name="fee"
                                value={fee}
                                readOnly
                                className="w-full border rounded px-3 py-1"
                                placeholder='e.g : 100 $'
                            />
                        </div>
                        <div className='flex items-center justify-center'>
                            <button type="submit" className="btn btn-primary mt-4">
                                Apply
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    visa: PropTypes.object.isRequired
}

export default Modal;
