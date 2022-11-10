import React from 'react';
import moment from 'moment';

const ReviewCard = ({ review, user, dark }) => {
	const { displayName, photoURL, feedback, email, time } = review;

	// moment js not work properly or not set properly 
	const reviewTime = moment(time).startOf('hour').fromNow();

	return (
		<>
			<div className={`container flex flex-col w-full max-w-5xl shadow-sm md:shadow-md mt-10 p-6 mx-auto divide-y md:rounded-md divide-gray-300 ${dark ? "bg-base-200  " : "bg-primary"} ${!dark ? "text-base-100" : "text-gray-100"}`} >
				<div className="flex justify-between p-4">
					<div className="flex space-x-4">
						<div>
							{/* profile pic  */}
							
							{
								(user?.email === email) ?
									<label tabIndex={0} className=" relative flex-shrink-0">
										<div className=" rounded-full ">
											<span className="absolute bottom-0 right-1 w-3 h-3 bg-green-400 rounded-full"></span>
											<img src={photoURL} alt='' className='object-cover w-12 h-12 rounded-full' />
										</div>
									</label>
									:

									<img src={photoURL} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
							}
						</div>
						<div>
							<h4 className="font-bold">{displayName}</h4>
							<span className="text-xs text-gray-500">{email}</span>

						</div>
					</div>
					<h4 className="font-bold text-sm text-gray-400">{reviewTime}</h4>
				</div>
				<div className="p-4 space-y-2 text-sm ">
					<p>{feedback}</p>
				</div>
			</div>
		</>
	);
};

export default ReviewCard;