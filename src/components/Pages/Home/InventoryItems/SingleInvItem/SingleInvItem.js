import React from 'react';

const SingleInvItem = ({ invItem }) => {
    // const [jerseyName, price, supplierName, quantity, imgUrl] = invItem
    return (
        <div className='w-60 mx-auto my-6'>
            <div className=''>
                <img className='w-40 h-40 mx-auto' src={invItem.imgUrl} alt="" />
                <h4 className='font-medium'>{invItem.jerseyName}</h4>
                <p className='font-thin'>Supplier Name: {invItem.supplierName}</p>
            </div>
            <div className='flex justify-between'>
                <h6 className='font-semibold'>Price: {invItem.price}</h6>
                <h6 className='font-semibold'>Quantity: {invItem.quantity}</h6>
            </div>
            <button className='bg-gray-900 text-gray-50 px-6 py-1 rounded-lg mt-4 ml-16'>Update</button>

        </div>
    );
};

export default SingleInvItem;