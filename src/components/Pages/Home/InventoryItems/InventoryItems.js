import React from 'react';
import useInvItems from '../../../../hooks/useInvItems';
import StripedSpacer from '../../../../images/StripedSpacer.webp'
import SingleInvItem from './SingleInvItem/SingleInvItem';

const InventoryItems = () => {

    const [invItems] = useInvItems([])


    return (
        <div>
            <div className='relative '>
                <img src={StripedSpacer} alt="" />
                <div className='  absolute top-2 left-1/3'>
                    <h2 className='text-3xl font-bold ml-20 italic bg-slate-50 px-6 py-2'>Inventory Items</h2>
                </div>
            </div>
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