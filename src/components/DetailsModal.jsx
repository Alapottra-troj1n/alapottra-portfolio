import React from 'react';
import { FaEye, FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion'

const DetailsModal = ({ detailsModal, setDetailsModal,setCursorVariant }) => {

    const textEnter = () => setCursorVariant('onModal');
    const textLeave = () => setCursorVariant('default');
    

    const handleBack = () => {
        setDetailsModal('')
    }


    return (
        <>
            <input  type="checkbox" id="details-modal" className="modal-toggle" />

            <div    onMouseEnter={textEnter} onMouseLeave={textLeave} className="modal modal-middle sm:modal-middle">


                <motion.div initial={{scale: 0 }} animate={{scale: 1 }} className="modal-box bg-gray-100 text-gray-700">
                    <div className="my-5 h-64 overflow-hidden rounded-xl">
                        <img src={detailsModal?.longImg} className=" hover:-translate-y-3/4 transition duration-1000 ease-linear" alt="" />
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


                </motion.div>
            </div>
        </>
    );
};

export default DetailsModal;