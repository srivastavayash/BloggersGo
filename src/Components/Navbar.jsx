import React from 'react'
import { fav } from '../assets/images';
const Navbar = () => (
  <nav className='flex justify-between bg-gradient-to-r from-cyan-500 to-blue-500'>
    <div className='flex flex-row items-center'>
      <img src={fav} alt="bloggersGo-icon" />
      <span className="font-bold text-white cursor-pointer">BlogggersGo</span>
    </div>
    <div className='flex'>
      <ul className='flex space-x-8 pr-4 items-center'>
        <li className='text-white hover:border-b-2 cursor-pointer'>Home</li>
        <li className='text-white hover:border-b-2 cursor-pointer'>Blogs</li>
        <li className='text-white hover:border-b-2 cursor-pointer'>Events</li>
        <li className='text-white hover:border-b-2 cursor-pointer'>Jobs</li>
        <li className='text-white hover:border-b-2 cursor-pointer'>News</li>
      </ul>
    </div>
  </nav>
);

export default Navbar