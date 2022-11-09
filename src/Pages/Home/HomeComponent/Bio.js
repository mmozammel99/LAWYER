import React from 'react';
import img from '../../../Assets/HomepageImg/hp2-man-1.png'
import img2 from '../../../Assets/HomepageImg/signature2.png'
import img3 from '../../../Assets/HomepageImg/top-view-frame-with-contract-wooden-judge-gavel-min.jpg'
const Bio = () => {
    return (
        <>
            <div className="bg-primary text-gray-800 w-auto  lg:mx-24" style={{ backgroundImage: `url(${img3})` }}>
                <div className="container flex flex-col justify-center mx-0 mx-auto lg:flex-row lg:justify-around bg-black w-full bg-opacity-60" >
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left text-white">
                        <h1 className="text-4xl font-bold leading-none md:text-5xl">John B. Smith:
                        </h1>
                        <p className="mt-6 mb-8 text-md sm:mb-12">
                            Highly skilled former prosecutor and trial lawyer that has successfully handled more than 5,000 cases and over 100 jury trials.
                            <br />
                            Robert is an authority in criminal defense and professional licensing defense. Fluent in spanish, italian, hebrew, portuguese.
                        </p>
                        <img src={img2} className='w-36 ' alt="" />
                    </div>
                    <div className="flex items-center justify-center lg:mt-0 h-72 sm:h-80 lg:h-full ">
                        <img src={img} alt="" className="object-contain h-72 sm:h-80 lg:h-full " />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Bio;