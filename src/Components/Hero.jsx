import React from 'react'

const Hero = () => (
  <div className='flex  flex-row  justify-between bg-black'>
  <div className=''>
   <p className='text-yellow-500 text-9xl pt-4'>LET'S DIVE IN BLOGS !</p>
   <p className='text-gray-400 text-1xl w-96 p-2 tracking-wider'>Discover <span className='text-gray-300 font-bold'>BloggerGo:</span> your go-to platform for bloggers. Create, connect, and conquer the blogging world with our expert resources.</p> 
  <button className='flex flex-row border-none rounded-xl bg-yellow-600 text-white m-2 pl-2 p-2 hover:bg-yellow-400 hover:text-black border items-center'>GetStarted <img src="../src/arrow.png" alt="arrow" className='p-1 w-6' /></button>
  </div>
  <div className='m-4 rounded-full bg-gradient-to-r from-black to-blue-500 '>
    <img src="../src/Hero.webp" alt="blogs" className='z-10'/>
  </div>
  </div>
);

export default Hero