import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';

const Error = () => {
	const {dark}= useContext(AuthContext)
    return (
        <>
            <section className={`flex items-center h-screen p-16 ${dark ? "bg-base-200  " : "bg-primary"} ${!dark?"text-base-100":"text-gray-100" }`} >
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl ">
				<span className="sr-only">Error</span>404
			</h2>
			<p className="text-2xl font-semibold md:text-3xl ">Sorry, we couldn't find this page.</p>
			<p className="mt-4 mb-8 ">But dont worry, you can find plenty of other things on our homepage.</p>
			<Link to="/" className="px-8 py-3 font-semibold rounded btn btn-outline">Back to Homepage</Link>
		</div>
	</div>
</section>
        </>
    );
};

export default Error;