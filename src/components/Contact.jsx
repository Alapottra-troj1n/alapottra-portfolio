import React from 'react';
import contactImg from '../assets/Saly-6.png';
import emailjs from '@emailjs/browser';

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
        <div className="mt-16 flex  flex-col justify-center items-center">
            <h2 className="text-3xl lg:text-5xl mb-10 font-bold text-white" >Contact</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex justify-center">
                    <img src={contactImg} className="w-3/4" alt="" />
                </div>

                <div className="flex items-center justify-center lg:justify-start  p-10">
                    <div class="card w-full lg:w-3/4 bg-slate-200 shadow-xl">
                        <div class="card-body">
                            <form onSubmit={sendEmail} className='flex items-center flex-col gap-3'>
                                <input type="email" name='email' placeholder="Email" class="input input-bordered bg-white w-full" />
                                <input type="text" name='subject' placeholder="Subject" class="input input-bordered bg-white w-full " />
                                <textarea type="text" name='message' placeholder="Message" class="input input-bordered bg-white h-28 w-full" />
                                <input type="submit"  value="SUBMIT" className='btn hover:bg-secondary border-0 text-white mt-2' />
                            </form>
                        </div>
                    </div>




                </div>

            </div>

        </div>
    );
};

export default Contact;