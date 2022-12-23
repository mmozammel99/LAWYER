import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import CardLoader from '../CardLoader/CardLoader';
import ServicesCard from '../Services/ServicesCard';
import Banner from './HomeComponent/Banner';
import Bio from './HomeComponent/Bio';
import ChooseBar from './HomeComponent/ChooseBar';
import Clients from './HomeComponent/Clients';
import ContactUs from './HomeComponent/ContactUs';
import Feedback from './HomeComponent/Feedback';
import Progress from './HomeComponent/Progress';

const Home = () => {
    const { dark } = useContext(AuthContext)
    const [services, setServices] = useState([])

    // card louder
    const cards = [1, 2, 3]

    //services card data load
    useEffect(() => {
        fetch('https://lawyer-sigma.vercel.app/home')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    useTitle('Home')
    return (
        <div className={`px-[5%] my-0 ${dark ? "bg-base-100" : "bg-gray-100"} pb-3 `}>
            {/* Banner  */}
            <Banner />

            {/*services card  data */}

            <div>
                <div className=' flex text-2xl lg:text-4xl font-bold justify-center gap-5 my-20'>
                    -
                    <h2 className={`${!dark ? "text-base-100" : "text-gray-100"}`}> Legal Practices Area </h2>
                    -
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 py-5'>


                    {(services?.length === 0) ?

                        // services card louder

                        <> {
                            cards.map(card => <CardLoader
                                key={card}
                            ></CardLoader>)
                        }
                        </>
                        :

                        // services card

                        <> {
                            services.map(service => <ServicesCard
                                key={service._id}
                                service={service}></ServicesCard>)
                        }
                        </>


                    }
                </div>

                {/* see All button  */}

                {
                    (services?.length > 0) &&
                    <Link className='my-10 flex justify-center' to='/services'>
                        <button className='btn w-36'>See All</button>
                    </Link>
                }
            </div>

            {/* Bio */}

            <Bio />

            {/* Progress */}

            <Progress />


            {/* why ChooseBar me banner  */}

            <ChooseBar />

            <Clients />

            <Feedback />
            {/* ContactUs */}

            <ContactUs />

            {/* Clients */}

           

        </div>
    );
};

export default Home;