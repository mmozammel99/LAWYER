import React, { useContext } from 'react';
import { AuthContext } from '../../AuthContext/AuthProvider';

const CardLoader = () => {
	const {dark}= useContext(AuthContext)
	return (
		<div className={`${dark?"bg-base-100":"bg-gray-100" }`}>
			<div className="flex flex-col m-8 rounded shadow-md w-96 animate-pulse h-full">
				<div className={`h-48 rounded-t ${dark ? "bg-base-200  " : "bg-primary"}`}></div>
				<div className={`flex-1 px-4 py-8 space-y-4 sm:p-8 ${dark ? "bg-base-200  " : "bg-primary"}`}>
					<div className="w-full h-6 rounded bg-gray-300"></div>
					<div className="w-full h-6 rounded bg-gray-300"></div>
					<div className="w-3/4 h-6 rounded bg-gray-300"></div>
				</div>
			</div>
		</div>
	);
};

export default CardLoader;