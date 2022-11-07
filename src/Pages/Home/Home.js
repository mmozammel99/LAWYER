import React from 'react';
import Banner from './HomeComponent/Banner';

const Home = () => {
    return (
        <div className='px-[5%] bg-primary'>
            <Banner></Banner>
            <div className=' flex text-4xl font-bold justify-center gap-5 my-20'>-<h2 className="  text-black"> Legal Practices Area </h2>-</div>
        </div>
    );
};

export default Home;