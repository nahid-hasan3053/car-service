import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])


    return (
        <div className='my-20'>
            <div className='text-center'>
                <p className='text-xl font-semibold text-orange-500'>SERVICES</p>
                <p className="text-5xl font-bold">OUR SERVICE AREA</p>
                <p className='w-1/2 mx-auto mt-4'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className=' mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;