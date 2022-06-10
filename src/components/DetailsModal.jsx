import React from 'react';
import { FaEye, FaGithub } from "react-icons/fa";

const DetailsModal = ({ detailsModal, setDetailsModal }) => {

    const handleBack = () => {
        setDetailsModal('')
    }


    return (
        <>
            <input type="checkbox" id="details-modal" className="modal-toggle" />

            <div className="modal modal-middle sm:modal-middle">


                <div className="modal-box bg-white text-gray-700">
                    <div className="my-5">
                        <img src={detailsModal.img} className="rounded-xl" alt="" />
                    </div>


                    <h3 className="font-bold text-2xl">{detailsModal.name}</h3>
                    <p className="py-4 font-semibold">{detailsModal.des}</p>
                    <div>
                        {detailsModal.points.map((point) => <li>{point}</li>)}

                    </div>
                    <div className='flex gap-2 flex-wrap mt-5'>
                        {detailsModal.techUsed.map((tech) => <div className="badge p-3 text-white">{tech}</div>)}
                    </div>

                    <div className='flex gap-5 flex-wrap mt-5'>
                        <div>
                            <a rel="noopener noreferrer" target="_blank" href={detailsModal.livelink}> <FaEye className="text-2xl hover:text-yellow-400 cursor-pointer" /> </a>
                            <p>Live</p>
                        </div>
                        <div>
                            <a rel="noopener noreferrer" target="_blank" href={detailsModal.github}><FaGithub className="text-2xl hover:text-yellow-400 cursor-pointer" /></a>
                            <p>Github</p>
                        </div>
                    </div>

                    <div className="modal-action">
                        <label for="my-modal-6" onClick={handleBack} className="btn text-white">GO BACK</label>
                    </div>


                </div>
            </div>
        </>
    );
};

export default DetailsModal;