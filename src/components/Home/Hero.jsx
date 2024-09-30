import React from 'react'
import { hero } from '../../assets'

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row items-center justify-between py-12 px-6 md:px-16 bg-white'>
      {/* Left Section */}
      <div className='flex flex-col items-start'>
        <h1 className='text-4xl font-bold mb-4'>NEW WATCH COLLECTIONS B720</h1>
        <p className='text-gray-500 mb-6'>
          Latest arrival of the new imported watches of the B720 series, with a
          modern and resistant design.
        </p>
        <p className='text-orange-500 text-3xl font-bold mb-6'>$1245</p>
        <div className='flex space-x-4'>
          <button className='bg-gray-300 text-black px-6 py-2 rounded-md shadow hover:bg-gray-400'>
            Discover
          </button>
          <button className='bg-black text-white px-6 py-2 rounded-md shadow hover:bg-gray-700'>
            Add to Cart
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className='relative'>
        <img
          src={hero}
          alt='New Watch B720'
          className='object-cover w-full h-auto'
        />
      </div>

      {/* Social Media Vertical Links */}
      <div className='absolute left-6 hidden md:flex flex-col gap-16 items-center space-y-4 text-gray-400'>
        <a href='#' className='transform rotate-90'>
          Facebook
        </a>
        <a href='#' className='transform rotate-90'>
          Twitter
        </a>
        <a href='#' className='transform rotate-90'>
          Instagram
        </a>
      </div>
    </section>
  )
}

export default Hero
