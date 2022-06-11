import React from 'react';
import contactImg from '../assets/Saly-6.png';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { motion } from 'framer-motion';


const Contact = () => {



    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm('service_0dj6lqj', 'template_4fzzupd', e.target, 'dDFcdKy-u5m9Zqqqx')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });


    };


    return (
        <div id='contact' className="mt-16 flex  flex-col justify-center items-center">
            <h2 className="text-3xl lg:text-5xl mb-10 font-bold text-white">Contact</h2>


            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col lg:flex-row-reverse items-center justify-center">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3" >
                            <FaPhoneAlt className='text-lg' />
                            <h2>+8801846659808</h2>
                        </div>
                        <div className="flex items-center gap-3" >
                            <FaEnvelope className='text-lg' />
                            <h2>alapottrachakma2001@gmail.com</h2>
                        </div>
                        <div className="flex items-center gap-3" >
                            <FaLocationArrow className='text-lg' />
                            <h2>Rangamati, Bangladesh</h2>
                        </div>

                    </div>

                    <motion.img initial={{ rotate: 90, scale: 0,  }}
                        whileInView={{ rotate: 0,scale:1   }}
                        transition={{duration: .5, ease: 'easeOut'}}
                        viewport={{ repeat: true }}
                        src={contactImg} className="w-2/4" alt="" />




                </div>

                <div className="flex items-center justify-center lg:justify-start  p-10">
                    <div class="card w-full lg:w-3/4 bg-slate-200 shadow-xl">
                        <div class="card-body">
                            <form onSubmit={sendEmail} className='flex items-center flex-col gap-3'>
                                <input type="email" name='email' placeholder="Email" class="input input-bordered bg-white w-full" />
                                <input type="text" name='subject' placeholder="Subject" class="input input-bordered bg-white w-full " />
                                <textarea type="text" name='message' placeholder="Message" class="input input-bordered bg-white h-28 w-full" />
                                <input type="submit" value="SUBMIT" className='btn hover:bg-yellow-400 border-0 text-white mt-2' />
                            </form>
                        </div>
                    </div>




                </div>

            </div>

        </div>
    );
};

export default Contact;