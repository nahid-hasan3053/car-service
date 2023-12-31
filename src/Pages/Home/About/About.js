import React from 'react';
import parts from '../../../assets/images/about_us/parts.jpg'
import person from '../../../assets/images/about_us/person.jpg'

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} className='w-4/5 h-full rounded-lg shadow-xl' alt="" />
                    <img src={parts} className='w-3/5 right-5 top-1/2 rounded-lg shadow-xl absolute border-8' alt="" />
                </div>
                <div className='w-1/2'>
                    <p className='text-3xl font-bold text-orange-400 mb-3'>ABOUT US!</p>
                    <h1 className="text-5xl font-bold">WE ARE QUALIFIED <br /> @ EXPERIENCE OF <br /> THIS FIELD</h1>
                    <p className="py-6">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                    </p>
                    <p className="py-6">
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                    </p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;