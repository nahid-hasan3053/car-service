import React from 'react';
import './Banner.css'

const BannerItem = ({slide}) => {

    const {image, id, preview, next} = slide;

    return (
            <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='img-gradient'>
                    <img src={image} className='rounded-xl' alt="" />
                </div>
                <div className="absolute flex justify-start top-1/4 transform -translate-y-1/2 left-20">
                    <h1 className='text-6xl text-white font-bold'>AFFORDABLE <br /> PRICE FOR <br /> CAR SERVICING</h1>
                </div>
                <div className="absolute flex justify-start w-2/5 top-2/4 transform -translate-y-1/2 left-20">
                    <p className='text-white font-semibold text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                </div>
                <div className="absolute flex justify-start w-2/5 top-3/4 transform -translate-y-1/2 left-20">
                    <button className='btn btn-warning mr-6'>Discover more</button>
                    <button className='btn btn-outline btn-warning'>Latest Services</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href={`#slide${preview}`} className="btn btn-circle me-3">❮</a> 
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div>
    );
};

export default BannerItem;