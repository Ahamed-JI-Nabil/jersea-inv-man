import React from 'react';
import useInvItems from '../../../hooks/useInvItems';
import Footer from '../Shared/Footer/Footer';
import Carousel from './Carousel/Carousel';
import Clubs from './Clubs/Clubs';
import StripedSpacer from '../../../images/StripedSpacer.webp'
import SingleInvItem from './InventoryItems/SingleInvItem/SingleInvItem';



const Home = () => {

    const [invItems, serInvItems] = useInvItems([])

    return (
        <div className=''>
            <Carousel></Carousel>
            <div className='relative'>
                <img className='w-full' src={StripedSpacer} alt="" />
                <div className=' absolute top-2 left-1/3 '>
                    <h2 className='text-3xl font-bold ml-20 italic bg-slate-50 px-6 py-3'>Inventory Items</h2>
                </div>
            </div>
            <div className='grid grid-cols-3 '>
                {
                    invItems.slice(0, 6).map(invItem => <SingleInvItem
                        key={invItem._id}
                        invItem={invItem}
                    ></SingleInvItem>)
                }
            </div>
            <Clubs></Clubs>

            <Footer></Footer>
        </div>
    );
};

export default Home;