import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthContext/AuthProvider';

const ChooseBar = () => {
    const {dark}= useContext(AuthContext)
    return (
        <div className='w-full text-center py-10 '>

            <p className={`text-lg lg:text-xl font-bold p-3 ${!dark?"text-base-100":"text-gray-100" }`}>WHAT WE ARE EXPERT AT</p>
            <h2 className='text-3xl lg:text-4xl font-bold'>Why Clients Choose Us?</h2>
            <div className='flex justify-around flex-col lg:flex-row my-12'>
                <div><h2 className='text-4xl font-bold my-3'>1000+</h2>Client Consultations</div>
                <div><h2 className='text-4xl font-bold my-3'>90%</h2>Successful Cases</div>
                <div><h2 className='text-4xl font-bold my-3'>10mIns</h2>Recovered cost for clients</div>

            </div>
        </div>
    );
};

export default ChooseBar;