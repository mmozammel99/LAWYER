import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthContext/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import MyReviewCard from './MyReviewCard';
import Swal from 'sweetalert2'

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    useTitle('My Reviews')
    useEffect(() => {
        fetch(`http://localhost:5000/my-reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handleEdit = async (id) => {

        const { value: text } = await Swal.fire({
            input: 'textarea',
            inputLabel: 'Feedback Edit',
            inputPlaceholder: 'Type your message here...',
            inputAttributes: {
                'aria-label': 'Type your message here'
            },
            showCancelButton: true
        })
        console.log(text);
        


        fetch(`http://localhost:5000/my-reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ feedback: text })
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    const remainingReview = reviews.filter(r => r._id !== id)
                    const editReview = reviews.find(r => r._id === id)
                    editReview.feedback = text;
                    const newReview = [editReview, ...remainingReview]
                    setReviews(newReview)
                }
            })
    }
    return (
        <div className='w-full bg-gray-100 text-gray-800 pb-10 '>
            <div className='text-neutral-content flex text-2xl lg:text-5xl font-bold justify-center gap-5 py-10'>
                -
                <h2 > Feedback</h2>
                -
            </div>
            {
                reviews.map(r => <MyReviewCard
                    key={r._id}
                    review={r}
                    handleEdit={handleEdit}
                ></MyReviewCard>)
            }

        </div>
    );
};

export default MyReviews;