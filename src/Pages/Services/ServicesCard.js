import React from 'react';

const ServicesCard = ({ service }) => {
    const { img, title, details, price } = service;
    return (
        <>
            <div className="card w-96 bg-primary shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-black'>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <p>Price: $ {price}</p>
                        <button className="btn ">Details</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesCard;