import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className=' py-8'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-36 px-6'>
        {/* Our information */}
        <div>
          <h4 className='font-semibold mb-4'>Our Information</h4>
          <p>1234 - Peru</p>
          <p>La Libertad 43210</p>
          <p>123-456-789</p>
        </div>

        {/* About Us */}
        <div>
          <h4 className='font-semibold mb-4'>About Us</h4>
          <ul>
            <li className='mb-2'>
              <a href='#' className='text-gray-600 hover:underline'>
                Support Center
              </a>
            </li>
            <li className='mb-2'>
              <a href='#' className='text-gray-600 hover:underline'>
                Customer Support
              </a>
            </li>
            <li className='mb-2'>
              <a href='#' className='text-gray-600 hover:underline'>
                About Us
              </a>
            </li>
            <li>
              <a href='#' className='text-gray-600 hover:underline'>
                Copy Right
              </a>
            </li>
          </ul>
        </div>

        {/* Product */}
        <div>
          <h4 className='font-semibold mb-4'>Product</h4>
          <ul>
            <li className='mb-2'>
              <a href='#' className='text-gray-600 hover:underline'>
                Road bikes
              </a>
            </li>
            <li className='mb-2'>
              <a href='#' className='text-gray-600 hover:underline'>
                Mountain bikes
              </a>
            </li>
            <li className='mb-2'>
              <a href='#' className='text-gray-600 hover:underline'>
                Electric
              </a>
            </li>
            <li>
              <a href='#' className='text-gray-600 hover:underline'>
                Accessories
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className='font-semibold mb-4'>Social</h4>
          <div className='flex space-x-4'>
            <a href='#' className='text-gray-600 hover:text-black'>
              <FaFacebook />
            </a>
            <a href='#' className='text-gray-600 hover:text-black'>
              <FaTwitter />
            </a>
            <a href='#' className='text-gray-600 hover:text-black'>
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className='text-center mt-8 text-gray-500 text-sm'>
        © Powered by Pixel. All rights reserved
      </div>
    </footer>
  )
}

export default Footer
