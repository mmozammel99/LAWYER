import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Banner from './HomeComponent/Banner';
import ChooseBar from './HomeComponent/ChooseBar';
import Clients from './HomeComponent/Clients';
import ContactUs from './HomeComponent/ContactUs';
import Progress from './HomeComponent/Progress';

const Home = () => {
    useTitle('Home')
    return (
        <div className='px-[5%] my-0 bg-primary'>
            <Banner />
            <div className=' flex text-2xl lg:text-4xl font-bold justify-center gap-5 my-20'>
                -
                <h2 className=" text-base-300"> Legal Practices Area </h2>
                -
            </div>

            <Progress />
            <hr />
            <ChooseBar />
            <hr />
            <ContactUs />
            <Clients/>
        </div>
    );
};

export default Home;