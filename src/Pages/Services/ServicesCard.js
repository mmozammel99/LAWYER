import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const {_id ,img, title, details, price } = service;
    return (
        <>
            <div className="card w-96 bg-primary shadow-xl">
                <figure>
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} alt="Shoes" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className="card-title uppercase">{title}</h2>
                    <p className='text-black'>{(details).slice(0, 100)} ...</p>
                    <div className="card-actions justify-end">
                        <p>Price: $ {price}</p>
                        <Link to={`/details/${_id}`} className="btn ">Details</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesCard;