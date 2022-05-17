import React from 'react';
import StripedSpacer from '../../../../images/StripedSpacer.webp'
import clubs from '../../../../clubsData.json'
import Club from '../Club/Club';

const Clubs = () => {

    return (
        <div>
            <div className='relative '>
                <img src={StripedSpacer} alt="" />
                <div className=' absolute bottom-8 left-2/4'>
                    <h2 className='text-3xl font-semibold bg-slate-50 px-6 py-4 text-center'>Clubs</h2>
                </div>
            </div>
            <div className='grid grid-cols-6 gap-0 px-16'>
                {
                    clubs.map(club => <Club
                        club={club}
                    ></Club>)
                }
            </div>
        </div>
    );
};

export default Clubs;