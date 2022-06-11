import React, { useState } from 'react';
import DetailsModal from './DetailsModal';
import Project from './Project';

const Projects = ({setCursorVariant}) => {

    const [detailsModal, setDetailsModal] = useState('');

    const project1 = {
        name : 'Furnitano',
        img: 'https://i.ibb.co/qRvp3CP/Capture.png',
        des : 'A Full-Stack inventory management website specializes in managing furniture.',
        livelink : 'https://furnitano.web.app/',
        github : 'https://github.com/Alapottra-troj1n/furnitano-client',
        longImg: 'https://i.ibb.co/JjDMzYk/furnitano-1.jpg',
        
        points : ['User friendly authentication, password retrieval system, dynamic and protected routing',
                  ' CRUD functionality users will be able to add, remove, edit and manage products',
                  'Users will be able to deliver, restock and also view their own products on My Inventory'
        ],
        techUsed : ['React.js', 'Tailwind CSS', 'Firebase', 'React Query', 'Express.js', 'Mongodb', 'Stripe.js']

    }

    const project2 = {
        name : 'Ignition',
        des : 'A Full-Stack Project with Stripe payment gateway integration and admin features.',
        img: 'https://i.ibb.co/FmqHhP9/Capture2.png',
        livelink : 'https://ignition-6cdd3.web.app/',
        github : 'https://github.com/Alapottra-troj1n/ignition-client',
        points : ['Stripe Payment gateway integration with Dynamic UI',
        ' Protected and Private routing for users and admins with JWT and React Router',
        'Admin specific features and routes that can manage all orders and products'
        ],
        longImg : 'https://i.ibb.co/vxJ6LjZ/ignition.jpg',
        techUsed : ['React.js', 'Tailwind CSS', 'Firebase', 'React Query', 'Express.js', 'Mongodb', 'Stripe.js']

    }

    const project3 = {
        name : 'Modern Dashboard',
        des : 'A Modern Dashboard UI with React and Recharts',
        img: 'https://i.ibb.co/DYDpHFN/Capture3.png',
        livelink : 'https://analytical-dashboard.netlify.app/',
        github : 'https://github.com/Alapottra-troj1n/analytical-dashboard-react',
        points : ['Modern Dashboard design cloned from a Figma design', 'Different kinds of custom designed charts showing different data', 'Implemented recharts'],
        techUsed: ['React.js', 'Recharts', 'React Router', 'Daisy UI', 'Tailwind CSS'],
        longImg : 'https://i.ibb.co/tLn6MVS/screencapture-analytical-dashboard-netlify-app-2022-06-10-22-59-05-1.jpg'

    }





    return (
        <div className="mt-16 flex  flex-col justify-center items-center" >
             {detailsModal && <DetailsModal setCursorVariant={setCursorVariant} setDetailsModal={setDetailsModal} detailsModal={detailsModal} />}
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