import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useProduct from '../../hooks/useProducts';

const Booking = () => {
    // Common Data Area
    const [services, setServices] = useProduct();

    const [detailService, setDetailServices] = useState({});

    // Dynamic route Id
    let { serviceId } = useParams();

    useEffect(() => {
        const findServices = services.find(service => service._id === serviceId);
        setDetailServices(findServices)

    }, [services])


    return (
        <div>
            <h4>Details About Service:</h4>
            <p> {detailService?.name}</p>
            <p>Phone: {detailService?.phone}</p>
            <p>Address: {detailService?.address}</p>
            <p>Mail: {detailService?.email}</p>
            <p>Institute: {detailService?.company}</p>
            <p>Fee: {detailService?.fee}</p>
            <p>{detailService?.about}</p>
            <img src={detailService?.picture} alt="" />

        </div>
    );
};

export default Booking;