import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {

    const {title, img, price, _id} = service

    return (
        <div className="card border-2 rounded-lg card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary"><Link to={`/checkout/${_id}`}>Checkout</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;