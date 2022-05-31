import React from 'react';
import { Link } from 'react-router-dom';

const Club = ({ club }) => {
    return (
        <div className='mt-8'>
            <div>
                <div className='flex justify-center'>
                    <Link to='www.google.com'><img className='h-36 w-36' src={club.imgUrl} alt="" /></Link>
                </div>
                <h2 className='text-center'>{club.name}</h2>
            </div>
        </div>
    );
};

export default Club;