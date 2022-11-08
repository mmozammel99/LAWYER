import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardDetails from './DetailsComponents/CardDetails';
import CardReviews from './DetailsComponents/ReviewsSection';

const Details = () => {
    const cardDetails = useLoaderData()
    return (
        <div>
            <CardDetails cardDetails={cardDetails}></CardDetails>
            <CardReviews></CardReviews>
        </div>
    );
};

export default Details;