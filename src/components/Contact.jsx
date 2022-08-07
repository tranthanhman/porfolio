import React from 'react'

import ins from '../assets/ins.png'
import fb from '../assets/fb.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import SocialLink from './SocialLink'

const Contact = () => {
  return (
    <div name='contact' className='pt-20 h-full bg-black'>
      <div className='max-w-screen-lg mx-auto h-full px-4'>

        <h2 className='text-white underline font-bold'>Contact</h2>
        <div className='pt-5'>
          <p className='text-gray-500'>Submit the form below to get in touch with me</p>
        </div>
        <div className='pt-5 grid md:grid-cols-2  gap-5 w-full'>
          <div className="flex justify-center sm:justify-start items-center w-full">
            <form method="POST" className=" flex flex-col w-full">
              <input type="text" name="name" placeholder="Enter your name"  className="w-full p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
              <input type="text" name="email" placeholder="Enter your email"  className="w-full my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
              <textarea name="message" placeholder="Enter your message"  rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's talk</button>
            </form>
          </div>
          <ul className='sm:hidden text-white space-y-3 pb-5'>
            <li>
              <a href='https://www.instagram.com/_arcip__/'>
                <div className='flex items-center gap-3 border-2 border-pink-500 rounded-lg py-2 px-3'>
                  <img src={ins} alt='' className='w-10 h-10 object-cover' />
                  <span>Instagram</span>
                </div>
              </a>
            </li>
            <li>
              <a href='https://www.facebook.com/kenlly.nguyn/'>
                <div className='flex items-center gap-3 border-2 border-blue-500 rounded-lg py-2 px-3'>
                  <img src={fb} alt='' className='w-10 h-10 object-cover' />
                  <span>Facebook</span>
                </div>
              </a>
            </li>
            <li>
              <a href='https://github.com/tranthanhman'>
                <div className='flex items-center gap-3 border-2 border-white rounded-lg py-2 px-3'>
                  <img src={github} alt='' className='w-10 h-10 object-cover' /><span>Github</span>
                </div>
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/thanhmantran/'>
                <div className='flex items-center gap-3 border-2 border-blue-300 rounded-lg py-2 px-3'>
                  <img src={linkedin} alt='' className='w-10 h-10 object-cover' /><span>Linkedin</span>
                </div>
              </a>
            </li>
          </ul>
          <div className='sm:block'>
            <SocialLink />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact