import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const Modal = () => {
    const { showModal, setShowModal } = useContext(AuthContext);

    const handleApply = () => {
        setShowModal(false)
    }



    return (
        <div>
            <div className="fixed inset-0 top-20 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg w-96">
                    <h2 className="text-lg font-semibold mb-4">Apply for</h2>
                    <form className='space-y-1'>
                        <div>
                            <label className="block font-medium mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full border rounded px-3 py-1"
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                className="w-full border rounded px-3 py-1"
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                className="w-full border rounded px-3 py-1"
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
                            />
                        </div>
                        <button
                            type="submit"
                            onClick={() => setShowModal(false)}
                            className="w-full bg-blue-500 text-white px-4  rounded"
                        >
                            <Link to= "/my-applications">Apply</Link>
                        </button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Modal;