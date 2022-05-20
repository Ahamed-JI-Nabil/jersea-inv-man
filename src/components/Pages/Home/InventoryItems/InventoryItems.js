import React from 'react';
import useInvItems from '../../../../hooks/useInvItems';
import BgImg from '../../Shared/BgImg/BgImg';
import SingleInvItem from './SingleInvItem/SingleInvItem';

const InventoryItems = () => {

    const [invItems] = useInvItems([])


    return (
        <div>
            <BgImg></BgImg>
            <div className='grid grid-cols-4 m-6 p-4 px-16'>
                {
                    invItems.map(invItem => <SingleInvItem
                        key={invItem._id}
                        invItem={invItem}
                    ></SingleInvItem>)
                }
            </div>
        </div>
    );
};

export default InventoryItems;