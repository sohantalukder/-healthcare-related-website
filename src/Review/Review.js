import React from 'react';

const Review = (props) => {

    const { name, about, picture, phone, age } = props.review;
    return (
        <div className="col-lg-4 col-sm-6 col-12 g-4">
            <div className="card">
                <img src={picture} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title">{name} ({age})</h3>
                    <h6>{phone}</h6>

                    <p className="card-text">{about}</p>
                </div>

            </div>
        </div>
    );
};

export default Review;