import React, { useState } from 'react';
import DetailsModal from './DetailsModal';
import Project from './Project';

const Projects = () => {

    const [detailsModal, setDetailsModal] = useState('');

    const project1 = {
        name : 'Furnitano',
        img: 'https://i.ibb.co/qRvp3CP/Capture.png',
        des : 'A Full-Stack inventory management website specializes in managing furniture.',
        livelink : 'https://furnitano.web.app/',
        github : 'https://github.com/Alapottra-troj1n/furnitano-client'

    }

    const project2 = {
        name : 'Ignition',
        des : 'A Full-Stack Project with Stripe payment gateway integration and admin features.',
        img: 'https://i.ibb.co/FmqHhP9/Capture2.png',
        livelink : 'https://ignition-6cdd3.web.app/',
        github : 'https://github.com/Alapottra-troj1n/ignition-client'

    }

    const project3 = {
        name : 'Modern Dashboard',
        des : 'A Modern Dashboard UI with React and Recharts',
        img: 'https://i.ibb.co/DYDpHFN/Capture3.png',
        livelink : 'https://analytical-dashboard.netlify.app/',
        github : 'https://github.com/Alapottra-troj1n/analytical-dashboard-react'

    }





    return (
        <div className="mt-16 flex  flex-col justify-center items-center" >
             {detailsModal && <DetailsModal setDetailsModal={setDetailsModal} detailsModal={detailsModal} />}
            <h2 className="text-3xl lg:text-5xl mb-10 font-bold text-white" >My Projects</h2>

            <div id="projects" className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                

            <Project setDetailsModal={setDetailsModal} project={project1} />
            <Project setDetailsModal={setDetailsModal} project={project2} />
            <Project setDetailsModal={setDetailsModal} project={project3} /> 

            </div>
           
        </div>
    );
};

export default Projects;