import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthContext/AuthProvider';
import AddReview from './Review/AddReview';
import ReviewCart from './Review/ReviewCart';

const ReviewsSection = () => {
    const {user}= useContext(AuthContext)
    return (
        <div>
            <AddReview></AddReview>
            <ReviewCart></ReviewCart>
        </div>
    );
};

export default ReviewsSection;