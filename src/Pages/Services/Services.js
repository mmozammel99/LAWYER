import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthContext/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import CardLoader from '../CardLoader/CardLoader';

import ServicesCard from './ServicesCard';

const Services = () => {
    const {dark}= useContext(AuthContext)
    const [services, setServices] = useState([])
    const cards = [1, 2, 3, 4, 5, 6]
    useEffect(() => {
        fetch('https://lawyer-sigma.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
        // setLoading(false)

    }, [])

    useTitle('Services')
    return (
        <div className={` py-10 ${dark?"bg-base-100":"bg-gray-100" }`}>
            <div className=' flex text-2xl lg:text-5xl font-bold justify-center gap-5 py-10'>
                -
                <h2 className= {`${!dark?"text-base-100":"" }`}> Legal Practices Area</h2>
                -
            </div>
            {(services?.length === 0) ?
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6'>
                    {
                        cards.map(card => <CardLoader
                            key={card}
                        ></CardLoader>)
                    }
                </div>

                :
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6'>
                    {
                        services.map(service => <ServicesCard
                            key={service._id}
                            service={service}></ServicesCard>)
                    }
                </div>
            }
        </div>
    );
};

export default Services;