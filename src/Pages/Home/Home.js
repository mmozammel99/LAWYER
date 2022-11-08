import React from 'react';
import Banner from './HomeComponent/Banner';
import ChooseBar from './HomeComponent/ChooseBar';
import ContactUs from './HomeComponent/ContactUs';
import Progress from './HomeComponent/Progress';

const Home = () => {
    return (
        <div className='px-[5%] my-0 bg-primary'>
            <Banner/>
            <div className=' flex text-2xl lg:text-4xl font-bold justify-center gap-5 my-20'>
                -
                <h2 className="  text-black"> Legal Practices Area </h2>
                -
            </div>

            <Progress/>
            <ChooseBar/>
            <ContactUs/>
        </div>
    );
};

export default Home;