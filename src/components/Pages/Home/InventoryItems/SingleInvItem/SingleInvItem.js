import React from 'react';
import { Link } from 'react-router-dom';

const SingleInvItem = ({ invItem }) => {


    const { _id, jerseyName, price, supplierName, quantity, imgUrl } = invItem



    return (
        <div className='w-60 mx-auto my-6'>
            <div className=''>
                <img className='w-40 h-40 mx-auto' src={imgUrl} alt="" />
                <h4 className='font-medium'>{jerseyName}</h4>
                <p className='font-thin'>Supplier Name: {supplierName}</p>
            </div>
            <div className='flex justify-between'>
                <h6 className='font-semibold'>Price: {price}</h6>
                <h6 className='font-semibold'>Quantity: {quantity}</h6>
            </div>
            <Link to={`/updateitem/${_id}`}><button className='bg-gray-900 text-gray-50 px-6 py-1 rounded-lg mt-4 ml-16'>Update</button></Link>

        </div>
    );
};

export default SingleInvItem;