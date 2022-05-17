import React from 'react';
import footerIcon from '../../../../images/icons/Word mark SVG.svg'
import facebook from '../../../../images/icons/facebook.png'
import insta from '../../../../images/icons/instagram.png'
import twitter from '../../../../images/icons/twitter.png'

const Footer = () => {
    return (
        <div className='bg-slate-900 flex justify-around'>
            <div className=''>
                <img className='w-24 h-24' src={footerIcon} alt="jersea icon" />

            </div>
            <div className='flex mt-6'>
                <img className='w-8 h-8 ml-2' src={facebook} alt="" />
                <img className='w-8 h-8 ml-2' src={insta} alt="" />
                <img className='w-8 h-8 ml-2' src={twitter} alt="" />
            </div>
            <div className='mt-6'>
                <span className='text-xs text-gray-300 font-bold '>COPYRIGHT © 2020 JERSEA, INC. ALL RIGHTS RESERVED</span>
            </div>
        </div>
    );
};

export default Footer;