import React from 'react';

const CardDetails = ({ cardDetails }) => {
    const { img, details, title } = cardDetails;
    return (
        <>
            <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-100 text-gray-800 ">
                <div className="flex flex-col  mx-auto overflow-hidden ">
                    <img src={img} alt="" className=" w-full lg:max-w-4xl mx-auto shadow-xl rounded-lg" />
                    <div className="md:p-10 max-w-7xl mx-auto pb-12 lg:-mt-52 space-y-6 px-5 lg:rounded-md bg-gray-50 text-justify shadow md:shadow-xl mb-10">
                        <div className="space-y-2 text-center">
                            <h2 className="inline-block text-2xl font-semibold sm:text-3xl uppercase ">{title}</h2>

                        </div>
                        <div className="text-gray-800">
                            <p>{details}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardDetails;