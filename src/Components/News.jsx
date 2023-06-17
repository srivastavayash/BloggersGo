import React from 'react'
const News = () => (
  <div className='flex flex-col bg-black'>
    <div className='flex flex-row items-center p-4'>
      <div className='p-1'><img src="../src/news1.png" alt="" /></div>
      <div className='text-3xl text-yellow-700 p-2 hover:underline cursor-pointer'>News Updates</div>
    </div>
    <div className='flex flex-row justify-around'>
      <div className='flex flex-col border-4 border-yellow-700 shad'>
        <div className='flex flex-row items-center '>
          <div><img src="../src/news.png" alt="News" className='w-40 h-40' /></div>
          <div className='text-3xl text-red-500 font-bold p-2'>STOCK FALLS 50%</div>
        </div>
        <div className='p-4 w-96 text-white'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fuga quo vel recusandae, porro quibusdam repellendus nesciunt, beatae quam laboriosam exercitationem. </div>
        <div className=' flex flex-row justify-between'>
        <div className='m-4 '> <button className='text-black border-none p-2 bg-green-500 rounded-md  hover:bg-green-700'> ReadMore</button> </div>
        <div className='m-4 '> <button className='text-black border-none p-2 bg-green-500 rounded-md  hover:bg-green-700'> ShareNow</button> </div>
        </div>
      </div>
      <div className='flex flex-col border-4 border-yellow-700 shad'>
        <div className='flex flex-row items-center '>
          <div><img src="../src/news.png" alt="News" className='w-40 h-40' /></div>
          <div className='text-3xl text-red-500 font-bold p-2'>STOCK FALLS 50%</div>
        </div>
        <div className='p-4 w-96 text-white'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fuga quo vel recusandae, porro quibusdam repellendus nesciunt, beatae quam laboriosam exercitationem. </div>
        <div className=' flex flex-row justify-between'>
        <div className='m-4 '> <button className='text-black border-none p-2 bg-green-500 rounded-md  hover:bg-green-700'> ReadMore</button> </div>
        <div className='m-4 '> <button className='text-black border-none p-2 bg-green-500 rounded-md  hover:bg-green-700'> ShareNow</button> </div>
        </div>
      </div>
      <div className='flex flex-col border-4 border-yellow-700 shad'>
        <div className='flex flex-row items-center '>
          <div><img src="../src/news.png" alt="News" className='w-40 h-40' /></div>
          <div className='text-3xl text-red-500 font-bold p-2'>STOCK FALLS 50%</div>
        </div>
        <div className='p-4 w-96 text-white'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fuga quo vel recusandae, porro quibusdam repellendus nesciunt, beatae quam laboriosam exercitationem. </div>
        <div className=' flex flex-row justify-between'>
        <div className='m-4 '> <button className='text-black border-none p-2 bg-green-500 rounded-md hover:bg-green-700'> ReadMore</button> </div>
        <div className='m-4 '> <button className='text-black border-none p-2 bg-green-500 rounded-md hover:bg-green-700'> ShareNow</button> </div>
        </div>
      </div>
    </div>
    <div className='flex flex-row p-4 m-4'>
      {/* <button>ReadMore <img src="right.png" alt="BloogersGo" /></button> */}
    </div>
  </div>
);

export default News