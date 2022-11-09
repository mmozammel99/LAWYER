import React, { useContext } from 'react';
import { AuthContext } from '../../../../../AuthContext/AuthProvider';
import Swal from 'sweetalert2'
const AddReview = ({ cardDetails, setReviews, reviews }) => {
    const { user } = useContext(AuthContext)
    const { email, displayName, photoURL } = user;

    const { _id, title } = cardDetails;

    const handleSubmit = event => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        event.preventDefault()
        const form = event.target
        const feedback = form.feedback.value;
        const time = new Date()
        let newReview = []

        const review = { feedback, serviceId: _id, title, email, displayName, photoURL, time };


        fetch('https://lawyer-sigma.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    newReview = [review, ...reviews]
                    setReviews(newReview);
                    Toast.fire({
                        icon: 'success',
                        title: 'Feedback Add successfully'
                    })
                    form.reset()
                }

            })
            .catch(err => console.error(err))
    }
    return (
        <>
            <div className="flex flex-col max-w-5xl p-8 shadow md:shadow-md mx-auto md:rounded-xl lg:p-12 bg-gray-50 text-gray-800">
                <div className="flex flex-col items-center w-full">
                    <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                    <div className="flex flex-col items-center py-6 space-y-3">
                        <span className="text-center">How was your experience?</span>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col w-full">
                        <textarea rows="3" name='feedback' placeholder="Message..." className="p-4 rounded-md border-2 resize-none text-gray-800 bg-gray-50"></textarea>
                        <button type="submit" className="py-4 my-8 font-semibold rounded-md btn btn-outline">Submit feedback</button>
                    </form>
                </div>

            </div>
        </>
    );
};

export default AddReview;