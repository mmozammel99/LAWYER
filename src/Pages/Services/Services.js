import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([])
 
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    useTitle('Services')
    return (
        <div className='bg-primary py-10'>
            <div className=' flex text-2xl lg:text-5xl font-bold justify-center gap-5 py-10'>
                -
                <h2 className=" text-base-300"> Legal Practices Area</h2>
                -
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;