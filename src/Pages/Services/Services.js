import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container'>
            <h2 className='text-primary'>Our Services</h2>
            <div className='row'>
                {
                    services.map(service => <Service
                        key={service.name}
                        service={service}

                    ></Service>)

                }
            </div>

        </div>
    );
};

export default Services;