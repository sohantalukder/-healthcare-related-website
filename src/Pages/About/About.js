import React, { useEffect, useState } from 'react';
import Appointments from '../Appointments/Appointments';

const About = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('/doctorsdata.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div>

            <div className="container">
                <div className="row">
                    {
                        doctors.map(doctor => <Appointments
                            key={doctor._id}
                            doctor={doctor}
                        ></Appointments>)
                    }
                </div>
            </div>



        </div>
    );
};

export default About;