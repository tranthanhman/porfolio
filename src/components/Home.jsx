import React from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi'
import Avatar from '../assets/avatar.jpg'


const Home = () => {
    return (
        <div name='home' className='pt-20 h-screen bg-black'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='text-white font-bold space-y-5'>
                    <h2 className='sm:text-7xl'>I'm a Frontend Developer</h2>
                    <p className='text-gray-500'>
                        I have 1 year of experience including 1+ years frontend (reactjs , vuejs) and 0.5 years backend (nest js), wishing to be a fullstack programm in 3 years
                    </p>
                    <div className=''>
                        <button className='flex gap-2 items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg'>
                            <span>Porfolio</span>
                            <span><HiOutlineChevronDown size={16} /></span>
                        </button>
                    </div>
                </div>
                <div className='w-full pt-5 md:pt-0'>
                    <img src={Avatar} alt='' className='rounded-2xl mx-auto w-2/3 md:w-full h-[250px] object-cover sm:h-[400px]' />
                </div>
            </div>
        </div>
    )
}

export default Home