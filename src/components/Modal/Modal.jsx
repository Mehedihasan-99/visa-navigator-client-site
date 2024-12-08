import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Modal = () => {
    const { user, setShowModal } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = user?.email
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;

        const myDetails = { email, firstName, lastName }
        console.log(myDetails)
        setShowModal(false)
        navigate("/my-applications")
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
                                placeholder={user?.email}
                                className="w-full border rounded px-3 py-1"
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                className="w-full border rounded px-3 py-1"
                                placeholder='First Name'
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                className="w-full border rounded px-3 py-1"
                                placeholder='Last Name'
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Applied Date</label>
                            <input
                                type="date"
                                name="appliedDate"
                                className="w-full border rounded px-3 py-1"
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Fee</label>
                            <input
                                type="text"
                                name="fee"
                                className="w-full border rounded px-3 py-1"
                                placeholder='e.g : 100 $'
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white px-4  rounded">Apply
                        </button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Modal;