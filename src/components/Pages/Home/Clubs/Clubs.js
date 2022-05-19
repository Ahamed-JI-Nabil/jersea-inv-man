import React, { useEffect, useState } from 'react';
import StripedSpacer from '../../../../images/StripedSpacer.webp'
import Club from '../Club/Club';

const Clubs = () => {
    const [clubs, setClubs] = useState([])

    useEffect(() => {
        fetch("clubsData.json")
            .then(res => res.json())
            .then(data => setClubs(data))
    }, [])

    return (
        <div>
            <div className='relative '>
                <img src={StripedSpacer} alt="" />
                <div className='  absolute top-2 left-1/3 '>
                    <h2 className='text-3xl font-bold ml-36 italic bg-slate-50 px-6 py-3'>Clubs</h2>
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