import React, { useContext } from 'react';
import img from '../../../Assets/HomepageImg/smiling-company-manager-welcoming-client-office.jpg'
import { AuthContext } from '../../../AuthContext/AuthProvider';

const Progress = () => {
    const {dark}= useContext(AuthContext)

    return (
        <div className="hero  text-base-300 py-10 ">
            <div className="hero-content flex-col lg:flex-row justify-around">
                
                <img src={img} alt='' className=" lg:w-[50%] shadow-md" />

                <div className='hero-content flex-col lg:w-96'>
                    <h2 className='text-3xl font-bold text-neutral-content '>SKILLS</h2>
                    <div className={`flex gap-52 mt-3 ${dark?"text-gray-100 ":""} ` }><p>Practice Area</p> <p>80%</p></div>
                    <progress className={`progress ${dark?"progress-warning ":""}`}  value="80" max="100"></progress>
                    <div className={`flex gap-52 mt-3 ${dark?"text-gray-100 ":""} ` }><p>Success Case</p> <p>90%</p></div>
                    <progress className={`progress ${dark?"progress-warning ":""}`} value="90" max="100"></progress>
                    <div className={`flex gap-44 mt-3 ${dark?"text-gray-100 ":""} ` }><p>Happy Customer</p> <p>100%</p></div>
                    <progress className={`progress ${dark?"progress-warning ":""}`} value="100" max="100"></progress>
                    
                </div>
            </div>
        </div>
    );
};

export default Progress;