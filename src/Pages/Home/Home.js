import React from 'react';
import MiddleSection from '../MiddleSection/MiddleSection';
import Services from '../Services/Services';
import Banner from '../Shared/Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Services></Services>
            <MiddleSection></MiddleSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;