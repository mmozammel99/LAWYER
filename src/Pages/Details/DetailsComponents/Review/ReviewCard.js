import React from 'react';

const ReviewCard = ({ review, user }) => {
	const { displayName, photoURL, feedback, email } = review;
	

	return (
		<>
			<div className="container flex flex-col w-full max-w-5xl shadow-md mt-10 p-6 mx-auto divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800">
				<div className="flex justify-between p-4">
					<div className="flex space-x-4">
						<div>

							{
								(user?.email === email)?
									<label tabIndex={0} className=" relative flex-shrink-0">
										<div className=" rounded-full ">
											<span className="absolute bottom-0 right-1 w-3 h-3 bg-green-400 rounded-full"></span>
											<img src={photoURL} alt=''className='object-cover w-12 h-12 rounded-full' />
										</div>
									</label>
									:

									<img src={photoURL} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
							}







						</div>
						<div>
							<h4 className="font-bold">{displayName}</h4>
							<span className="text-xs text-gray-600">{email}</span>

						</div>
					</div>
				</div>
				<div className="p-4 space-y-2 text-sm text-gray-600">
					<p>{feedback}</p>
				</div>
			</div>
		</>
	);
};

export default ReviewCard;