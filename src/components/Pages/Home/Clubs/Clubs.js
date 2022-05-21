import React, { useEffect, useState } from 'react';
import populerClubs from '../../../../images/Title_PopularClubs_D.jpg'
import Club from '../Club/Club';

const Clubs = () => {
    const [clubs, setClubs] = useState([])

    useEffect(() => {
        fetch("https://aqueous-forest-31171.herokuapp.com/clubs")
            .then(res => res.json())
            .then(data => setClubs(data))
    }, [])

    return (
        <div className=''>
            <img src={populerClubs} alt="" />
            <div className='grid grid-cols-6 gap-0 px-16 mb-40'>
                {
                    clubs.map(club => <Club
                        key={club._id}
                        club={club}
                    ></Club>)
                }
            </div>
        </div>
    );
};

export default Clubs;