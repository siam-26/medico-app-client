import React from 'react';
import Banner from '../Banner/Banner';
import CardsInfo from '../CardsInfo/CardsInfo';
import Services from '../Services/Services';
import TreatmentSection from '../TreatmentSection/TreatmentSection';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Testimonial from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner/>
            <CardsInfo/>
            <Services/>
            <TreatmentSection/>
            <MakeAppoinment/>
            <Testimonial/>
            <Contact/>
        </div>
    );
};

export default Home;