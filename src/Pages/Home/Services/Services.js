import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const servicesData = [
        {
            id:1,
            name:'Fluoride Treatment',
            description:'Boost your dental health with our fluoride treatment. Strengthen your teeth, fight decay, and achieve a radiant smile',
            img:fluoride
        },

        {
            id:2,
            name:'Cavity Filling',
            description:'Repair and restore your teeth with our professional cavity filling service. Trust our experts for durable, natural-looking results',
            img:cavity
        },

        {
            id:3,
            name:'Teeth Whitening',
            description:'Get a dazzling smile with our teeth whitening treatments. Say goodbye to stains and hello to a radiant, confident you',
            img:whitening
        },
    ];
    return (
        <div className='mt-16 lg:mt-24'>
            <div className='text-center'>
                <h3 className='text-xl text-primary font-bold uppercase'>Our Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>

            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map((service)=><Service
                     key={service.id}
                     service={service}
                    >

                    </Service>)
                }
            </div>
            
        </div>
    );
};

export default Services;