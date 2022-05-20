import React from 'react';
import { Link } from 'react-router-dom';

const Club = ({ club }) => {
    return (
        <div className='mt-8'>
            <div>
                <Link to='www.google.com'><img className='h-36 w-36 bg-auto bg-no-repeat bg-center' src={club.imgUrl} alt="" /></Link>
                <h2 className='ml-6'>{club.name}</h2>
            </div>
        </div>
    );
};

export default Club;