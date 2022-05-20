import React from 'react';

const TeandingItem = ({ accessorie }) => {

    const { productName, price, imgUrl } = accessorie

    return (
        <div className='mt-8'>
            <div>
                <img className='h-36 w-36 bg-auto bg-no-repeat bg-center mx-auto' src={imgUrl} alt="" />
                <h2 className='ml-6 text-center mt-4'>{productName}</h2>
                <p className='text-center'>${price}</p>
                <div className='flex justify-center mt-4'>
                    <button className='bg-gray-900 text-gray-50 px-14 py-1 rounded-lg '>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default TeandingItem;