import React from 'react'

import ralogo from '../images/ralogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Header() {
    return (
        <>
            <div className="header-container flex gap-3 text-white px-8">
                <img src={ralogo} alt="logo" className='h-28 w-32 rounded-full'></img>
                <div className='flex justify-between w-full border-spacing-5 border-white border-b-2'>
                    <div className="left-container flex items-center">
                        <h1 className='text-3xl'>Ramaera industries</h1>
                    </div>
                    <div className="right-container flex items-center gap-3">
                        <FontAwesomeIcon icon="bell" />
                        <h1>English(UK)</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header