import React from 'react';
import './Banner.css';
import bannerchair from '../../../assets/images/chair.png'

const Banner = () => {
    return (
        <div className='mt-6 lg:mt-24'>
            <div className="hero banner">
   <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={bannerchair} className="rounded-lg shadow-2xl lg:w-1/2" />
    <div>
      <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p className="py-6">Streamline your healthcare experience with our user-friendly doctor scheduling app MEDICO-APP. Book appointments seamlessly and stay organized with ease.</p>
      <button className="btn border-0 bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;