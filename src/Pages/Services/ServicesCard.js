import React, { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';

const ServicesCard = ({ service }) => {
    const { dark } = useContext(AuthContext)
    const { _id, img, title, details, price } = service;

    return (
        <>
            <div className={`card w-96 shadow-xl ${dark ? "bg-base-200" : "bg-primary"}`}>

                <figure>
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} alt="Shoes" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>

                <div className="card-body">
                    <h2 className="card-title uppercase">{title}</h2>

                    <p className={`${!dark ? "text-base-100" : "text-gray-100"}`}>{(details).slice(0, 100)} ...</p>

                    <div className="card-actions justify-end">

                        <p>Price: $ {price}</p>
                        <Link to={`/details/${_id}`} className={`btn ${dark ? "btn-outline" : ""}`}>Details</Link>

                    </div>

                </div>

            </div>
        </>
    );
};

export default ServicesCard;