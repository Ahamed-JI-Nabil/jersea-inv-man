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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 m-6 p-4 px-16'>
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