import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaCompress } from "react-icons/fa";
import { motion } from 'framer-motion';

const Project = ({ project, setDetailsModal }) => {



    const handleModal = () => {

        setDetailsModal(project);
    }



    return (

        <div class="card lg:w-96 glass m-5">
            <figure><img src={project.img || "https://api.lorem.space/image/car?w=400&h=225"} alt="car!" /></figure>
            <div class="card-body">
                <h2 class="card-title text-white">{project.name}</h2>
                <p>{project.des}</p>
                <div class="card-actions justify-center">
                    <motion.a  whileHover={{scale : 1.5}} rel="noopener noreferrer" target="_blank" href={project.livelink}><FaExternalLinkAlt className="text-white mx-2 hover:text-yellow-400  text-xl cursor-pointer" /></motion.a>
                    <motion.a  whileHover={{scale : 1.5}} rel="noopener noreferrer" target="_blank" href={project.github}><FaGithub className="text-white mx-2 hover:text-yellow-400  text-xl cursor-pointer" /></motion.a>
                    <label for="details-modal"><FaCompress onClick={handleModal} className="text-white mx-2 hover:text-yellow-400  text-xl cursor-pointer" /></label>

                </div>
            </div>
        </div>

    );
};

export default Project;