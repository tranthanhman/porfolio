import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import tailwind from '../assets/tailwind.png'
import vue from '../assets/vue.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import mongodb from '../assets/mongodb.png'
import nestjs from '../assets/nestjs.png'
import github from '../assets/github.png'

const Experience = () => {
  const skills = [
    {
      img: html,
      name: 'HTML',
      css:'shadow-orange-500'
    },
    {
      img: css,
      name: 'Css',
      css:'shadow-blue-500'
    },
    {
      img: js,
      name: 'Javascript',
      css:'shadow-yellow-500'
    },
    {
      img: react,
      name: 'ReactJs',
      css:'shadow-blue-500'
    },
    {
      img: vue,
      name: 'Vuejs',
      css:'shadow-green-500'
    },
    {
      img: tailwind,
      name: 'Tailwind Css',
      css:'shadow-blue-500'
    },
    {
      img: mongodb,
      name: 'Mongodb',
      css:'shadow-green-500'
    },
    {
      img: nestjs,
      name: 'Nestjs',
      css:'shadow-red-500'
    },
    {
      img: github,
      name: 'Github',
      css:'shadow-white'
    },
  ]
  return (
    <div name='experience' className='pt-20 h-full bg-black text-white'>
      <div className='max-w-screen-lg mx-auto h-full px-4'>
        <h2 className='text-white underline font-bold'>Experience</h2>
        <div className='py-10'>
          <div className='w-full grid grid-cols-3 sm:grid-cols-5 text-center gap-5 sm:px-0 '>
          {skills.map((s, i) => (
            <div key={i} className={`w-full shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${s.css}`}>
              <img src={s?.img} alt={s.name} className="w-20 mx-auto pt-3" />
              <p className="mt-4">{s.name}</p>
            </div>
          ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Experience