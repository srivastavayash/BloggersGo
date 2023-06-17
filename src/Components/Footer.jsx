import React from 'react'
import { fav } from '../assets/images';

const Footer = () => (
  <div className='bg-black'>
  <div className='flex flex-row items-center border-none bg-gradient-to-r from-black via-slate-500 to-black'>
   <img src={fav} alt="footer" />
   <p className='text-white place-content-center'>&copy; 2023-24. All rights reserved.</p>
  </div>
  </div>
);

export default Footer