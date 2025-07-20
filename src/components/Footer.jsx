import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center w-full'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo_dark} alt="" />
                <p className='text-gray-400 mt-4 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold'>
                    Company
                </h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href="#Header" 
                    className='hover:text-white'>Home</a>
                    <a href="#About" 
                    className='hover:text-white'>About Us</a>
                    <a href="#Contact" 
                    className='hover:text-white'>Contact Us</a>
                    <a href="#" 
                    className='hover:text-white'>Privacy Policy</a>
                </ul>
            </div>
            <div className='w-full md:w-1/3'>
                <h3 className='text-white text-lg font-bold'>
                    Subscribe to our newsletter
                </h3>
                <p className='text-gray-400 mb-4 max-w-80 font-light'>The latest news, article, and resources, sent to your inbox weekly</p>
                <div className='flex felx-col gap-2'>
                    <input type="email" placeholder='Enter your email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none' />
                    <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
                </div>
            </div>
        </div>
        <div className='text-center text-gray-500 border-t border-gray-600 w-full py-2 mt-8 text-sm'>
        Copyright 2024 © ginistack. All Right Reserved.
        </div>
    </div>
  )
}

export default Footer