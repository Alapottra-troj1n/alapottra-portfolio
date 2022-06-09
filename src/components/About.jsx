import React from 'react';
import pcguy from '../assets/Saly-38.png'

const About = () => {
    return (
        <div className='mt-28 flex  flex-col justify-center items-center lg:px-36 px-5'>
            <h2 className='text-3xl lg:text-5xl mb-5 font-bold text-white' >About Me</h2>
            <div>
                <p className=' mx-auto mt-4 text-2xl' >A self-motivated and passionate web developer. Always open to learning and exploring
                    new technologies. Seeking an organization that offers a constructive environment
                    where I can further enhance my knowledge and grow along with the organization.
                </p>
            </div>

            <div className='mt-16'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='flex flex-col gap-5 order-last lg:order-first  items-start '>
                        <p><span className="text-2xl lg:text-3xl font-bold text-white">Expertise: </span> <span className="text-xl">Javascript, REST API, React.js, React Router, React Hooks, HTML5,
                            CSS3, SCSS,Tailwind CSS, Bootstrap 5, Mongodb, Express.js</span> </p>

                        <p><span className="text-2xl lg:text-3xl font-bold text-white">Comfortable: </span> <span className="text-xl">Mongoose, Redux, Firebase ,Daisy UI , Material UI, React Query
                        </span> </p>

                        <p><span className="text-2xl lg:text-3xl font-bold text-white">Familiar: </span> <span className="text-xl">Next.js, Python,Typescript, Framer Motion
                        </span> </p>

                        <p><span className="text-2xl lg:text-3xl font-bold text-white">Tools: </span> <span className="text-xl">Adobe Photoshop, Adobe Illustrator, Figma, Github, Netlify, Heroku,
                            Wordpress, Webflow, Shopify
                        </span> </p>


                    </div>
                    <div className='flex justify-center'>
                        <img src={pcguy} className='lg:w-3/4' alt="" />
                    </div>
                </div>

            </div>



        </div>
    );
};

export default About;