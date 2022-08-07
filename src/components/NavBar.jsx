import React, { useState } from 'react'
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { Link } from "react-scroll";


const NavBar = () => {
    const [isShow, setIsShow] = useState(false)

    const links = [
        {
            id: 1,
            name: 'Home',
            link: 'home'
        },
        {
            id: 2,
            name: 'About',
            link: 'about'
        },
        {
            id: 3,
            name: 'Porfolio',
            link: 'porfolio'
        },
        {
            id: 4,
            name: 'Experience',
            link: 'experience'
        },
        {
            id: 5,
            name: 'Contact',
            link: 'contact'
        },
    ]
    return (
        <>
            <div className='fixed w-full flex justify-between items-center h-20 bg-black text-white px-4 md:px-8'>
                <div className='text-3xl'>Hello</div>
                <div className='cursor-pointer z-10 text-gray-500 md:hidden'
                    onClick={() => setIsShow(!isShow)}
                >
                    {isShow ? (<HiOutlineX size={36} />) : (<HiMenu size={36} />)}
                </div>
                <ul className=' hidden md:flex items-center gap-10  text-gray-500 bg-black'>
                    {links.map((l, i) => (
                        <li key={l?.id}>
                            <Link to={l.link} smooth duration={500}>
                                <span className='px-4 cursor-pointer capitalize py-6 text-4xl'>{l.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className={isShow ? 'flex flex-col justify-center absolute top-0 left-0 w-full h-screen  md:flex items-center gap-10  text-gray-500 bg-black' : `hidden `}>
                    {links.map((l, i) => (
                        <li key={l?.id}>
                            <Link to={l.link} smooth duration={500}>
                                <span className='px-4 cursor-pointer capitalize py-6 text-4xl'>{l.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>


            </div>
        </>
    )
}

export default NavBar