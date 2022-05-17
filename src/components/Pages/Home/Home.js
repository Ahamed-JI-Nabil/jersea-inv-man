import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Carousel from './Carousel/Carousel';
import Clubs from './Clubs/Clubs';


const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Clubs></Clubs>

            <Footer></Footer>
        </div>
    );
};

export default Home;