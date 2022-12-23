import React, { useEffect, useState } from 'react';
import FeedbackCard from './FeedbackCard';

const Feedback = () => {
    const [reviews1, setReviews1] = useState([])
    const [reviews2, setReviews2] = useState([])
    // Feedback lode
    useEffect(() => {
        fetch(`https://lawyer-sigma.vercel.app/reviews?serviceId=636a5f3d71a91713de5c9e10`)
            .then(res => res.json())
            .then(data => setReviews1(data))
    }, [])

    useEffect(() => {
        fetch(`https://lawyer-sigma.vercel.app/reviews?serviceId=636a589a71a91713de5c9e0c`)
            .then(res => res.json())
            .then(data => setReviews2(data))
    }, [])
    
    return (
        <div>
            <section className="">
                <div className="container px-6 py-12 mx-auto">
                    <div className="grid items-center gap-4 xl:grid-cols-5">
                        <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                            <h2 className="text-4xl font-bold">Client feedback</h2>
                            </div>
                        <div className="p-6 xl:col-span-3">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="grid content-center gap-4">
                                    
                                    {
                                        reviews1.map((r,i)=><FeedbackCard 
                                        key={i}
                                        review={r}/>)
                                    }
                                </div>
                                <div className="grid content-center gap-4">
                                {
                                        reviews2.map((r,i)=><FeedbackCard 
                                        key={i}
                                        review={r}/>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Feedback;