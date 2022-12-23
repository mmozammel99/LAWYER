import moment from 'moment';
import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthContext/AuthProvider';

const FeedbackCard = ({review}) => {
    
    const { dark } = useContext(AuthContext)
    const { displayName, photoURL, feedback,  time } = review;

	// moment js not work properly or not set properly 
	const reviewTime = moment(time).startOf('hour').fromNow();
    return (
        <div>
            <div className={`${dark ? "bg-base-200" : "bg-primary"} shadow my-3 p-6 rounded shadow-md`}>
                                        <p>{feedback}</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src={photoURL} alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">{displayName}</p>
                                                <p className="text-sm text-gray-600">{reviewTime}</p>
                                            </div>
                                        </div>
                                    </div>
        </div>
    );
};

export default FeedbackCard;