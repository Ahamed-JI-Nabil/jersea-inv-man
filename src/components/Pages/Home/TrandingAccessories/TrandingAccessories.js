import React, { useEffect, useState } from 'react';
import TeandingItem from './TeandingItem/TeandingItem';
import accessoriesHeader from '../../../../images/Trending_Apparel_and_Accessories.jpg'

const TrandingAccessories = () => {

    const [accessories, setAccessories] = useState([])

    useEffect(() => {
        fetch('https://aqueous-forest-31171.herokuapp.com/accessories')
            .then(res => res.json())
            .then(data => setAccessories(data))
    }, [])
    console.log(accessories)
    return (
        <div className='my-14'>
            <img src={accessoriesHeader} alt="" />
            <div className='grid grid-cols-4 gap-2 px-16 mb-20'>
                {
                    accessories.map(accessorie => <TeandingItem
                        key={accessorie._id}
                        accessorie={accessorie}
                    ></TeandingItem>)
                }
            </div>
        </div>
    );
};

export default TrandingAccessories;