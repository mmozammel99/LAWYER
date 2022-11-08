import React from 'react';
import img from '../../../Assets/HomepageImg/smiling-company-manager-welcoming-client-office.jpg'
const Progress = () => {
    return (
        <div className="hero  text-base-300 py-10 ">
            <div className="hero-content flex-col lg:flex-row justify-around">
                <img src={img} alt='' className=" lg:w-[50%] shadow-md" />
                <div className='hero-content flex-col lg:w-96'>
                    <h2 className='text-3xl font-bold '>SKILLS</h2>
                    <div className='flex gap-52 mt-3 '><p>Practice Area</p> <p>80%</p></div>
                    <progress className="progress progress-info " value="80" max="100"></progress>
                    <div className='flex gap-52 mt-3 '><p>Success Case</p> <p>90%</p></div>
                    <progress className="progress progress-info" value="90" max="100"></progress>
                    <div className='flex gap-40 mt-3'><p>Happy Customer</p> <p>100%</p></div>
                    <progress className="progress progress-info" value="100" max="100"></progress>
                    
                </div>
            </div>
        </div>
    );
};

export default Progress;