import React from 'react';
import useInvItems from '../../../../hooks/useInvItems';
import inventoryimage from '../../../../images/inventory item image.jpg'
import SingleInvItem from './SingleInvItem/SingleInvItem';

const InventoryItems = () => {

    const [invItems] = useInvItems([])


    return (
        <div>
            <img src={inventoryimage} alt="" />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 m-6 p-4 px-16'>
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