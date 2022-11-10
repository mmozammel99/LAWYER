import React from 'react';
import { FaEdit, FaTrashAlt } from "react-icons/fa";


const MyReviewCard = ({ review, handleEdit, handleDelete, dark }) => {
    const { displayName, photoURL, feedback, email, title, _id } = review;


    return (
        <>
            <div className={`container flex flex-col w-full max-w-5xl shadow-md mt-10 p-6 mx-auto divide-y rounded-md divide-gray-300  ${dark ? "bg-base-200  " : "bg-primary"} ${!dark ? "text-base-100" : "text-gray-100"}`} >
                <div className="flex justify-between p-4">

                    <div className="flex space-x-4">

                        <label tabIndex={0} className=" relative flex-shrink-0">
                            <div className=" rounded-full ">
                                <span className="absolute bottom-0 right-1 w-3 h-3 bg-green-400 rounded-full"></span>
                                <img src={photoURL} alt='' className='object-cover w-12 h-12 rounded-full' />
                            </div>
                        </label>

                        <div>
                            <h4 className="font-bold">{displayName}</h4>
                            <span className="text-xs text-gray-400">{email}</span>
                        </div>

                    </div>

                    <h3 className='hidden md:inline text-xl font-bold'>{title}</h3>

                    <div className='flex gap-5 text-xl'>

                        <button onClick={() => handleEdit(_id)} className='bg-green-100 p-2 h-9 rounded-full'>
                            <FaEdit className='text-green-600' />
                        </button>

                        <button onClick={() => handleDelete(_id)} className='bg-red-100 p-2 h-9 rounded-full'>
                            <FaTrashAlt className='text-red-600' />
                        </button>

                    </div>

                </div>

                <h3 className=' md:hidden text-lg font-bold text-center'>{title}</h3>

                <div className="p-4 space-y-2 text-sm ">
                    <p>{feedback}</p>
                </div>

            </div>
        </>
    );
};

export default MyReviewCard;