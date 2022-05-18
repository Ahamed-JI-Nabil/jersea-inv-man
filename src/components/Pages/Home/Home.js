import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Carousel from './Carousel/Carousel';
import Clubs from './Clubs/Clubs';
import InventoryItems from './InventoryItems/InventoryItems';


const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <InventoryItems></InventoryItems>
            <Clubs></Clubs>

            <Footer></Footer>
        </div>
    );
};

export default Home;