import React from 'react';
import useInvItems from '../../../hooks/useInvItems';
import Carousel from './Carousel/Carousel';
import Clubs from './Clubs/Clubs';
import SingleInvItem from './InventoryItems/SingleInvItem/SingleInvItem';
import TrandingAccessories from './TrandingAccessories/TrandingAccessories';
import inventoryimage from '../../../images/inventory item image.jpg'



const Home = () => {

    const [invItems] = useInvItems([])

    return (
        <div className=''>
            <Carousel></Carousel>
            <img src={inventoryimage} alt="" />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 m-6 p-4 px-16'>
                {
                    invItems.slice(0, 8).map(invItem => <SingleInvItem
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