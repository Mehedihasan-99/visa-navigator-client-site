import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from '../Modal/Modal';
import { AuthContext } from '../../Providers/AuthProvider';



const VisaDetails = () => {
    const visa = useLoaderData();
    const { showModal, setShowModal  } = useContext(AuthContext)
    const { countryImage, countryName, visaType, processingTime, description, ageRestriction, fee, validity, applicationMethod } = visa;

    const handleApplyForVisa = () => {
        setShowModal(true);
    }

    return (
        <div className="md:w-10/12 mx-auto card card-compact bg-base-100 shadow-xl">
            <img
                src={countryImage}
                alt=""
                className='m-4 rounded-xl h-40  rounded-t-xl' />
            <div className="card-body">
                <p><strong>Country Name:</strong> {countryName}.</p>
                <p><strong> Visa Type:</strong> {visaType}.</p>
                <p><strong> Processing Time:</strong> {processingTime} Days.</p>
                <p><strong> Age Restriction:</strong> {ageRestriction} Years</p>
                <p><strong> Validity:</strong> {validity}.</p>
                <p><strong> Fee :</strong> {fee} $</p>
                <p><strong> Application Method :</strong> {applicationMethod}.</p>
                <p><strong> Description  :</strong> {description}.</p>

                <div className="card-actions justify-center mt-10">
                    <button onClick={handleApplyForVisa} className="btn btn-primary" >Apply For The Visa</button>
                </div>
                {
                    showModal && <Modal visa={visa}></Modal>
                }
            </div>
        </div>
    );
};

export default VisaDetails;