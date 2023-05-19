import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import CardInfo from './CardInfo';

const CardsInfo = () => {
    const infoCards = [
        {
            id:1,
            name:"Opening Hours",
            description:"Open 9:00AM to 5:00PM everyday",
            img:clock,
            bgColor:'bg-gradient-to-r from-primary to-secondary'
        },

        {
            id:2,
            name:"visit our location",
            description:"Open 9:00AM to 5:00PM everyday",
            img:marker,
            bgColor:"bg-accent"
        },

        {
            id:3,
            name:"Contact us now",
            description:"Open 9:00AM to 5:00PM everyday",
            img:phone,
            bgColor:"bg-gradient-to-r from-primary to-secondary"
        },
    ];
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24'>
            {
                infoCards.map(infoCard=><CardInfo
                key={infoCard.id}
                infoCard={infoCard}
                >

                </CardInfo>)
            }
        </div>
    );
};

export default CardsInfo;