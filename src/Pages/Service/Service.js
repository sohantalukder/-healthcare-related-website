import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, name, picture, fee, about, address } = service;
    return (
        <div className="col-lg-4 col-sm-6 col-12 g-4 fullbody">
            <div className="card">
                <img src={picture} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <h6>{fee}</h6>
                    <p className="card-text">{about}</p>
                </div>
                <Link className='service-btn py-3' to={`/booking/${_id}`}>
                    <button className='btn btn-primary service '>Book {name}
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Service;