import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../Images/404error.jpg'

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '400px' }} src={error} alt="" /> <br />
            <Link to='/'>

                <button style={{ color: 'green', border: '1px solid black', width: "50%" }}>Go Back</button>
            </Link>
        </div >

    );
};

export default NotFound;