import React from 'react'
import { NavLink } from 'react-router-dom'

const navData = [
    {
        icon: '',
        name: 'Profile',
        url: './component/Profile'
    },
    {
        icon: '',
        name: 'Projects',
        url: '../component/pages/Projects'
    },
    {
        icon: '',
        name: 'Finance'
    },
    {
        icon: '',
        name: 'Support'
    }

]

function Nav() {


    // bg-blue-300 border-2 border-black border-l-0 rounded-r-2xl when-active-nav



    return (
        <div>
            <ul className='text-white flex flex-col my-24 max-w-fit border-r-2 pr-12 '>
                {navData.map((data) => {
                    return <NavLink to={data.url} className='pl-4 pr-4 py-4 text-xl cursor-pointer'>{data.name}</NavLink >
                })

                }
            </ul>
        </div>
    )
}

export default Nav