import React from 'react';
import useInvItems from '../../../hooks/useInvItems';
import BgImg from '../Shared/BgImg/BgImg';
import Carousel from './Carousel/Carousel';
import Clubs from './Clubs/Clubs';
import SingleInvItem from './InventoryItems/SingleInvItem/SingleInvItem';
import TrandingAccessories from './TrandingAccessories/TrandingAccessories';



const Home = () => {

    const [invItems] = useInvItems([])

    return (
        <div className=''>
            <Carousel></Carousel>
            <BgImg></BgImg>
            <div className='grid grid-cols-3 '>
                {
                    invItems.slice(0, 6).map(invItem => <SingleInvItem
                        key={invItem._id}
                        invItem={invItem}
                    ></SingleInvItem>)
                }
            </div>
            <TrandingAccessories></TrandingAccessories>
            <Clubs></Clubs>


        </div>
    );
};

export default Home;