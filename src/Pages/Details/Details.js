import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import CardDetails from './DetailsComponents/CardDetails/CardDetails';
import CardReviews from './DetailsComponents/Review/ReviewsSection';


const Details = () => {
    const cardDetails = useLoaderData()

    useTitle('Service Details')

    return (
        <div>
            {/* CardDetails  */}
            <CardDetails cardDetails={cardDetails}></CardDetails>
            
            {/* CardDetails */}
            <CardReviews cardDetails={cardDetails}></CardReviews>
        </div>
    );
};

export default Details;