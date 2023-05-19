import React from 'react';
import contactImg from '../../../assets/images/appointment.png';
import AppoinmentButton from '../../../Components/AppointmentButton/AppoinmentButton';

const Contact = () => {
    return (
        <div
        className='mt-16 lg:mt-24'
        style={
            {
                background:`url(${contactImg})`,
                backgroundSize:'cover'
            }
        }>
            <div className='my-5'>
            <h4 className='text-xl font-bold text-center text-primary pt-12'>Contact Us</h4>
            <h1 className='text-3xl text-center text-white'>Stay connected with us</h1>
            </div>
            <form className='mb-12'>
                <div className='md:w-11/12 lg:w-4/12  mx-auto px-8 md:px-0x lg:px-0'>
                    <div className=''>
                        <input type="email" placeholder="Email Adress" className="input input-bordered w-full  mb-8" />
                        <br />
                        <input type="text" placeholder="Subject" className="input input-bordered w-full mb-8" />

                        <br />
                        <textarea className="textarea input-bordered w-full h-48" placeholder="Your message"></textarea>
                    </div>


                </div>

                <div className='flex justify-center py-12'>
                    <AppoinmentButton>Submit</AppoinmentButton>
                </div>
            </form>
        </div>
    );
};

export default Contact;