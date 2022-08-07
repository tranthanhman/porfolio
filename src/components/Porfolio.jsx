import React from 'react'
import ecommerce from '../assets/ecommerce.png'
import delivery from '../assets/delivery.png'
import todo from '../assets/todo.png'
import flutter from '../assets/flutter.png'

const Porfolio = () => {
    return (
        <div name='porfolio' className='pt-20 h-full bg-black'>
            <div className='max-w-screen-lg mx-auto h-full px-4'>
                <h2 className='text-white underline font-bold'>Porfolio</h2>
                <div className='pt-5 text-white'>
                    <span>Check out some my work here</span>
                </div>
                <ul className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 py-5'>
                   {projects.map((p,i)=>(
                        <li key={p.id} className='shadow-md shadow-gray-600 rounded-lg text-white'>
                            <img src={p.src} alt='' className='rounded-lg h-[200px] max-h-[200px] object-cover w-full' />
                            <div className='flex justify-between px-10 items-center py-3'>
                                <span className='px-3 py-2 bg-gray-500 rounded-lg'><a href={p?.code}>Code</a></span>
                                {p?.demo ? (<span className='px-3 py-2 bg-gray-500 rounded-lg'><a href={p?.demo}>Demo</a></span>) : (<span className='px-3 py-2 bg-gray-500 rounded-lg'><a href={p?.design}>Design</a></span>)} 
                            </div>
                        </li>
                   ))}
                </ul>
            </div>
        </div>
    )
}

export default Porfolio

const projects = [
    {
        id:1,
        src: ecommerce,
        code:'https://github.com/tranthanhman/e-commerce-shopgear-phone',
        demo:'https://e-commerce-shopgear-phone.vercel.app/'
    },
    {
        id:2,
        src: delivery,
        code:'https://gitlab.com/tranthanhman.dev/delivery',
        demo:'https://delivery-pied.vercel.app/'
    },
    {
        id:3,
        src: todo,
        code:'https://github.com/tranthanhman1912/Todo-App',
        demo:'https://tranthanhman1912.github.io/Todo-App/'
    },
    {
        id:4,
        src: flutter,
        code:'https://github.com/ChienVan01/project_android',
        design:'https://www.figma.com/file/bEzerde7E0BZfvS5bg2k5v/ShopGear?node-id=0%3A1'
    },
]