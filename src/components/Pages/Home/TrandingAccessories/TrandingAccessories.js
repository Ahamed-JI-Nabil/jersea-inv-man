import React, { useEffect, useState } from 'react';
import TeandingItem from './TeandingItem/TeandingItem';
import accessoriesHeader from '../../../../images/Trending_Apparel_and_Accessories.jpg'

const TrandingAccessories = () => {

    const [accessories, setAccessories] = useState([])

    useEffect(() => {
        fetch('Accessories.json')
            .then(res => res.json())
            .then(data => setAccessories(data))
    }, [])
    console.log(accessories)
    return (
        <div className='my-14'>
            <img src={accessoriesHeader} alt="" />
            <div className='grid grid-cols-4 gap-2 px-16 mb-40'>
                {
                    accessories.map(accessorie => <TeandingItem
                        accessorie={accessorie}
                    ></TeandingItem>)
                }
            </div>
        </div>
    );
};

export default TrandingAccessories;