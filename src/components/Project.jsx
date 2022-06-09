import React from 'react';
import { FaExternalLinkAlt,FaGithub } from "react-icons/fa";

const Project = ({project}) => {
    return (

        <div class="card lg:w-96 glass m-5">
            <figure><img src={project.img || "https://api.lorem.space/image/car?w=400&h=225"} alt="car!"/></figure>
            <div class="card-body">
                <h2 class="card-title text-white">{project.name}</h2>
                <p>{project.des}</p>
                <div class="card-actions justify-center">
                    <a href={project.livelink}><FaExternalLinkAlt className="text-white mx-2 hover:text-secondary text-lg"/></a>
                    <a href={project.github}><FaGithub className="text-white mx-2 hover:text-secondary text-lg"/></a>
                    
                </div>
            </div>
        </div>

    );
};

export default Project;