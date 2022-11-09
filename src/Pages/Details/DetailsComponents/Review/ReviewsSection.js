import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../AuthContext/AuthProvider';
import AddReview from './ReviewComponent/AddReview';
import LoginBanner from './ReviewComponent/LoginBanner';
import ReviewCard from './ReviewComponent/ReviewCard';

const ReviewsSection = ({ cardDetails }) => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`https://lawyer-sigma.vercel.app/reviews?serviceId=${cardDetails?._id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [cardDetails?._id])
    // console.log(reviews);

    return (
        <div className='w-full bg-gray-100 text-gray-800 pb-10 '>
            <div className='text-neutral-content flex text-2xl lg:text-5xl font-bold justify-center gap-5 py-10'>
                -
                <h2 > Feedback</h2>
                -
            </div>
            {user?.email ?
                <AddReview

                    cardDetails={cardDetails}
                    setReviews={setReviews}
                    reviews={reviews}
                ></AddReview>
                :
                <LoginBanner></LoginBanner>
            }
            {
                reviews.map(r => <ReviewCard
                    key={r._id}
                    review={r}
                    user={user}
                ></ReviewCard>)
            }


        </div>
    );
};

export default ReviewsSection;