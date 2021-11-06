import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../../hooks/useProducts';
import Review from '../../Review/Review';

const Reviews = () => {
    const [reviews, setreviews] = useState([])
    useEffect(() => {
        fetch('/review.json')
            .then(res => res.json())
            .then(data => setreviews(data))
    }, [])

    return (
        <div className='container'>
            <h2 className='m-5'>Customer Reviews</h2>
            <div className="row">
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}

                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;