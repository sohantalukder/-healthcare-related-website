import React from 'react';
import { Carousel } from 'react-bootstrap';
import './banner.css'
import banner1 from '../../../Images/banner/banner1.jpg';
import banner2 from '../../../Images/banner/banner2.jpg';
import banner3 from '../../../Images/banner/banner3.jpg';

const Banner = () => {
    return (
        <>
            <Carousel className='banner-size'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ color: 'black' }}>
                        <h3>Welcome to 24hr Medical Center</h3>
                        <p>We provide worldclass services and our reviews are always 5 stars!! plz cheak our services.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>All lab elements are here!!</h3>
                        <p>Our Doctors are always active for you.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>We care about you !!</h3>
                        <p>Babies and old peoples are always first priority for us.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;