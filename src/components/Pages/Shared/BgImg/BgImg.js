import React from 'react';
import StripedSpacer from '../../../../images/StripedSpacer.webp'

const BgImg = () => {
    return (
        <div>
            <div className='relative'>
                <img className='w-full' src={StripedSpacer} alt="" />
                <div className=' absolute top-2 left-1/4 '>
                    <h2 className='text-3xl font-bold italic ml-10 bg-slate-50 px-44 rounded-md py-2'>Inventory Items</h2>
                </div>
            </div>
        </div>
    );
};

export default BgImg;