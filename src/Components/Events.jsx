import React from 'react'
const Events = () => (
  <div className='flex flex-col bg-black'>
    <div className='flex items-center'>
      <img src="../src/events1.png" alt="news" className='m-2' />
      <p className='text-yellow-600 text-2xl m-2 hover:underline hover:cursor-pointer'>EVENTS UPCOMING</p>
    </div>
    <div className='flex flex-col m-2 text-white'>
      <div className='flex flex-row border-2 rounded-md m-2 shad justify-between items-center'><p className='flex flex-row items-center text-gray-400'> <img src="../src/dt.png" alt="date" className='p-1 m-1 w-8 h-8'/> 18/06/2023 | 10:00AM </p><span className='text-gray-300 text-xl'>International Science Conference</span> <button className='text-slate-100 border-none p-1 m-1 shad1 bg-green-600 hover:text-black'> Register</button></div>
      <div className='flex flex-row border-2 rounded-md m-2 shad justify-between items-center'><p className='flex flex-row items-center text-gray-400'> <img src="../src/dt.png" alt="date" className='p-1 m-1 w-8 h-8'/> 18/06/2023 | 10:00AM </p><span className='text-gray-300 text-xl'>International Science Conference</span> <button className='text-slate-100 border-none p-1 m-1 shad1 bg-green-600 hover:text-black'> Register</button></div>
      <div className='flex flex-row border-2 rounded-md m-2 shad justify-between items-center'><p className='flex flex-row items-center text-gray-400'> <img src="../src/dt.png" alt="date" className='p-1 m-1 w-8 h-8'/> 18/06/2023 | 10:00AM </p><span className='text-gray-300 text-xl'>International Science Conference</span> <button className='text-slate-100 border-none p-1 m-1 shad1 bg-green-600 hover:text-black'> Register</button></div>
      <div className='flex flex-row border-2 rounded-md m-2 shad justify-between items-center'><p className='flex flex-row items-center text-gray-400'> <img src="../src/dt.png" alt="date" className='p-1 m-1 w-8 h-8'/> 18/06/2023 | 10:00AM </p><span className='text-gray-300 text-xl'>International Science Conference</span> <button className='text-slate-100 border-none p-1 m-1 shad1 bg-green-600 hover:text-black'> Register</button></div>
    </div>

  </div>
);

export default Events