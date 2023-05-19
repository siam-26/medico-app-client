import React from 'react';
import treatment from '../../../assets/images/treatment.png';

const TreatmentSection = () => {
    return (
        <div className="hero mt-24">
  <div className="hero-content  flex-col lg:flex-row lg:w-10/12">
    <div className='w-full lg:w-5/12'>
    <img src={treatment} className="rounded-lg shadow-2xl" />
    </div>
    <div className='lg:px-10 w-full lg:w-7/12'>
      <h1 className="text-4xl lg:text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p className="py-6">Experience dental care on your terms with our exceptional services. We prioritize your unique needs, preferences, and comfort, ensuring a personalized approach to every treatment. Our dedicated team of professionals combines advanced techniques with a compassionate touch, empowering you to achieve optimal oral health and a radiant smile. Discover the difference of exceptional dental care designed exclusively for you.</p>
      <button className="btn border-0 bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default TreatmentSection;