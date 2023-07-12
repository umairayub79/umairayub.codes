import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='w-full border-b-2 p-7 flex justify-center'>
            <nav className=''>
                <ul className='flex gap-8'>
                    <li className={'transition-all duration-200 hover:translate-y-1 hover:text-blue-600'}>
                        <NavLink to={'/'} className={'relative text-black text-xl cursor-pointer hover:text-blue-600'}>Home</NavLink>
                    </li>
                    <li className={'transition-all duration-200 hover:translate-y-1 hover:text-blue-600'}>
                        <NavLink to={'/about'} className={'relative text-black text-xl  cursor-pointer hover:text-blue-600'}>About</NavLink>
                    </li>
                    <li className={'transition-all duration-200 hover:translate-y-1 hover:text-blue-600'}>
                        <NavLink to={'/projects'} className={'relative text-black text-xl cursor-pointer hover:text-blue-600'}>Projects</NavLink>
                    </li>
                    <li className={'transition-all duration-200 hover:translate-y-1 hover:text-blue-600'}>
                        <NavLink to={'/blog'} className={'relative text-black text-xl cursor-pointer hover:text-blue-600'}>Blog</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar