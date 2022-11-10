import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthContext/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import MyReviewCard from './MyReviewsComponents/MyReviewCard';
import NotFoundReviews from './MyReviewsComponents/NotFoundReviews';
import Swal from 'sweetalert2'

const MyReviews = () => {
    const { user, userLogOut, dark } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    useTitle('My Reviews')


    useEffect(() => {
        fetch(`https://lawyer-sigma.vercel.app/my-reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('geniusToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return userLogOut()
                }
                return res.json()
            })
            .then(data => setReviews(data))
    }, [user?.email, userLogOut])



    const handleEdit = (id) => {

        Swal.fire({
            input: 'textarea',
            inputLabel: 'Feedback Edit',
            inputPlaceholder: 'Type your message here...',
            inputAttributes: {
                'aria-label': 'Type your message here'
            },
            showCancelButton: true
        })
            .then(result => {

                if (result.isConfirmed) {
                    fetch(`https://lawyer-sigma.vercel.app/my-reviews/${id}`, {
                        method: 'PATCH',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({ feedback: result.value })

                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.matchedCount > 0) {
                                const remainingReview = reviews.filter(r => r._id !== id)
                                const editReview = reviews.find(r => r._id === id)
                                editReview.feedback = result.value;
                                const newReview = [editReview, ...remainingReview]
                                setReviews(newReview)
                            }
                        })
                        .catch(err => console.error(err))
                }
            })
            .catch(err => console.error(err))


    }
    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://lawyer-sigma.vercel.app/my-reviews/${id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {

                        const remainingReview = reviews.filter(r => r._id !== id)
                        setReviews(remainingReview)

                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success')
                    })
                    .catch(err => console.error(err))


            }
        })


    }
    return (
        <div className={`w-full pb-10 ${dark?"bg-base-100":"bg-gray-100" } ${!dark?"text-base-100":"text-gray-100" }`} >
            <div className='text-neutral-content flex text-3xl lg:text-5xl font-bold justify-center gap-5 py-10'>
                -
                <h2 > Feedback</h2>
                -
            </div>

            {(reviews.length === 0) ?
                <NotFoundReviews></NotFoundReviews>
                :
                <div>
                    {
                        reviews.map(r => <MyReviewCard
                            key={r._id}
                            review={r}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                            dark={dark}
                        ></MyReviewCard>)
                    }
                </div>
            }

        </div>
    );
};

export default MyReviews;