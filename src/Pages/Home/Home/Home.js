import React from 'react';
import Banner from '../Banner/Banner';
import CardsInfo from '../CardsInfo/CardsInfo';
import Services from '../Services/Services';
import TreatmentSection from '../TreatmentSection/TreatmentSection';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner/>
            <CardsInfo/>
            <Services/>
            <TreatmentSection/>
        </div>
    );
};

export default Home;