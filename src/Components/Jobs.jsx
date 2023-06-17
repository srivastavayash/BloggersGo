import React from 'react'

const Jobs = () => (
  <div className='bg-black flex flex-col'>
    <span className='flex flex-row p-2 text-3xl items-center'><img src="../src/jobs.png" alt="jobs" /> <p className='p-3 text-yellow-700 hover:underline cursor-pointer'>Jobs Available</p></span>
    <div className='flex flex-row justify-around'>
      <div className='flex flex-col border-2  items-center border-yellow-700 rounded-md text-white shad'>
        <div className='flex flex-row '>
          <div> <img src="../src/fb.png" alt="facebook" className='h-24 w-24 -ml-2 rounded-md  ' /></div>
          <div className='flex flex-col m-2'>
            <p className='text-gray-400 text-xs'>Facebook</p>
            <p>Sr. UI/UX designer</p>
            <p className='text-gray-400 text-sm'>$75k-$105k</p>
          </div>
          <div> <img src="../src/heart.png" alt="heart" className='h-4 m-4' /></div>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row'>
            <p className='border-none bg-gray-400 text-sm rounded-md  p-2 m-2'>Full Time</p>
            <p className='border-none bg-gray-400 text-sm rounded-md  p-2 m-2'>Senior</p>
            <p className='border-none bg-gray-400 text-sm rounded-md  p-2 m-2'>UI/UX</p>
          </div>
          <button className='border-none rounded-md pl-2 pr-2 m-2 bg-blue-700 text-white hover:bg-blue-500'>Apply</button>
        </div>
      </div>
      <div className='flex flex-col border-2  items-center border-yellow-700 rounded-md text-white shad'>
      <div className='flex flex-row '>
          <div> <img src="../src/google.png" alt="facebook" className='h-24 w-24 -ml-2 rounded-md  ' /></div>
          <div className='flex flex-col m-2'>
            <p className='text-gray-400 text-xs'>Facebook</p>
            <p>Sr. UI/UX designer</p>
            <p className='text-gray-400 text-sm'>$75k-$105k</p>
          </div>
          <div> <img src="../src/heart.png" alt="heart" className='h-4 m-4' /></div>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row'>
            <p className='border-none bg-gray-400 text-sm rounded-md  p-2 m-2'>Full Time</p>
            <p className='border-none bg-gray-400 text-sm rounded-md  p-2 m-2'>Senior</p>
            <p className='border-none bg-gray-400 text-sm rounded-md  p-2 m-2'>UI/UX</p>
          </div>
          <button className='border-none rounded-md pl-2 pr-2 m-2 bg-blue-700 text-white hover:bg-blue-500'>Apply</button>
        </div>
      </div>
      <div className='flex flex-col border-2  items-center border-yellow-700 rounded-md text-white shad'>
      <div className='flex flex-row '>
          <div> <img src="../src/insta.png" alt="facebook" className='h-24 w-24 -ml-2 rounded-md  ' /></div>
          <div className='flex flex-col m-2'>
            <p className='text-gray-400 text-xs'>Facebook</p>
            <p>Sr. UI/UX designer</p>
            <p className='text-gray-400 text-sm'>$75k-$105k</p>
          </div>
          <div> <img src="../src/heart.png" alt="heart" className='h-4 m-4' /></div>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row'>
            <p className='border-none bg-gray-400 text-sm rounded-md  p-2 m-2'>Full Time</p>
            <p className='border-none bg-gray-400 text-sm rounded-md  p-2 m-2'>Senior</p>
            <p className='border-none bg-gray-400 text-sm rounded-md  p-2 m-2'>UI/UX</p>
          </div>
          <button className='border-none rounded-md pl-2 pr-2 m-2 bg-blue-700 text-white hover:bg-blue-500'>Apply</button>
        </div>
      </div>
    </div>
  </div>
);

export default Jobs