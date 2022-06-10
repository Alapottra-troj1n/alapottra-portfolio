import React from 'react';

const DetailsModal = ({detailsModal, setDetailsModal}) => {
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
                    <p className="py-4">{detailsModal.des}</p>
                    <div>
                    {detailsModal.points.map((point) => <li>{point}</li> )}

                    </div>
                    <div className='flex gap-2 flex-wrap mt-3'>
                        {detailsModal.techUsed.map((tech) => <div className="badge p-3 text-white">{tech}</div> )}
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