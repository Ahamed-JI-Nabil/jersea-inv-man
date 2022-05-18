import React, { useEffect, useState } from 'react';
import StripedSpacer from '../../../../images/StripedSpacer.webp'
import SingleInvItem from './SingleInvItem/SingleInvItem';

const InventoryItems = () => {

    const [invItems, serInvItems] = useState([])

    useEffect(() => {
        fetch('InventoryItemsDatas.json')
            .then(res => res.json())
            .then(data => serInvItems(data))
    }, [])

    return (
        <div>
            <div className='relative '>
                <img src={StripedSpacer} alt="" />
                <div className=' absolute bottom-8 left-1/2'>
                    <h2 className='text-3xl font-semibold bg-slate-50 px-6 py-3'>Inventory Items</h2>
                </div>
            </div>
            <div className='grid grid-cols-3 m-6 p-4 px-16'>
                {
                    invItems.map(invItem => <SingleInvItem
                        invItem={invItem}
                    ></SingleInvItem>)
                }
            </div>
        </div>
    );
};

export default InventoryItems;