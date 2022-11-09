import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import CardLoader from '../CardLoader/CardLoader';
import ServicesCard from '../Services/ServicesCard';
import Banner from './HomeComponent/Banner';
import Bio from './HomeComponent/Bio';
import ChooseBar from './HomeComponent/ChooseBar';
import Clients from './HomeComponent/Clients';
import ContactUs from './HomeComponent/ContactUs';
import Progress from './HomeComponent/Progress';

const Home = () => {
    const [services, setServices] = useState([])
    const cards = [1, 2, 3]
    useEffect(() => {
        fetch('https://lawyer-sigma.vercel.app/home')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    useTitle('Home')
    return (
        <div className='px-[5%] my-0 bg-primary'>
            <Banner />
            <div>
                <div className=' flex text-2xl lg:text-4xl font-bold justify-center gap-5 my-20'>
                    -
                    <h2 className=" text-base-300"> Legal Practices Area </h2>
                    -
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6'>


                    {(services?.length === 0) ?
                        <> {
                            cards.map(card => <CardLoader
                                key={card}
                            ></CardLoader>)
                        }
                        </>
                        :
                        <> {
                            services.map(service => <ServicesCard
                                key={service._id}
                                service={service}></ServicesCard>)
                        }
                        </>


                    }
                </div>
                {
                    (services?.length > 0) &&
                    <Link className='my-10 flex justify-center' to='/services'>
                        <button className='btn w-36'>See All</button>
                    </Link>
                }
            </div>
            <Bio/>
            <Progress />
            <hr />
            <ChooseBar />
            <hr />
            <ContactUs />
            <Clients />
        </div>
    );
};

export default Home;