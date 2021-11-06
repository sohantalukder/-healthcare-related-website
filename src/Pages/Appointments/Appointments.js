import React from 'react';
import './Appointments.css'

const Appointments = (props) => {
    const { picture, age, fee, about, phone, email } = props.doctor;
    return (

        <div className="col-lg-4 col-sm-6 col-12 g-4 fullbody">
            <div className="card">
                <img src={picture} class="card-img-top" alt="..." />
                <div className="card-body">


                    <h6>{phone}</h6>
                    <p>{email}</p>
                    <h5>{about}</h5>

                </div>

            </div>
        </div>

    );
};

export default Appointments;