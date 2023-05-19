import React from 'react';
import quotes from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            id:1,
            name:'Anik Chowdhury',
            img:people1,
            review:"I had an absolutely incredible experience at this dental practice. The staff was extremely friendly and welcoming, and the dentist took the time to thoroughly explain each step of the procedure. The results were nothing short of amazing, and I couldn't be happier with my new smile!",
            location:'Chottogram'
        },

        {
            id:2,
            name:'John Doe',
            img:people2,
            review:"I can confidently say that this dental practice provides top-notch care. The staff was professional, caring, and attentive to all of my needs. The facility itself was modern and inviting, creating a calm and relaxing atmosphere. I highly recommend their services to anyone in need of exceptional dental care.",
            location:'California'
        },

        {
            id:3,
            name:'Princess Angela',
            img:people3,
            review:"From the moment I walked in, I was greeted by a warm and welcoming staff. The dentist was incredibly knowledgeable, taking the time to answer all of my questions and providing detailed explanations of my treatment options. The level of care I received was exceptional, and I left feeling confident in my dental health and grateful for their expertise.",
            location:'Sydney'
        }
    ]
    return (
        <section className='mt-16 lg:mt-24'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                    <h1 className='text-4xl'>What Our Patients Says</h1>
                </div>

                <figure>
                    <img className='w-24 lg:w-42' src={quotes} alt=''/>
                </figure>
            </div>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map((review)=><Review
                      key={review.id}
                      review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;