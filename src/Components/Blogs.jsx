import React from 'react' 
import { CLG, skills, sm1 } from '../assets/images';

const Blogs = () => (
  <div className=' bg-black'>
  <div className='flex flex-row hover:underline hover:cursor-pointer text-yellow-500 text-6xl justify-center mb-4 pl-2'> <h1>Blogs of the day !</h1></div>
  <div className='bg-black flex flex-row justify-around '>
    <div className='flex flex-col shad pl-6 pt-4 pb-2 border-4  border-yellow-700 rounded-xl m-2   '> 
      <div> <img src={sm1} alt="smartphone" className='flex justify-center w-64 rounded-lg border-2 border-gray-500 h-44 '  /> </div>
      <div className='p-4'> <p className='w-64 text-white'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quos hic veniam? Optio, aspernatur ipsum sit possimus ad labore quidem consequatur eligendi delectus beatae consequuntur id ullam ea non exercitationem sint officiis.</p> </div>
      <button className='border-2 rounded-xl w-44 ml-10 mt-4 mb-2 text-yellow-600 hover:bg-yellow-500 hover:text-black'>ReadMore</button>
    </div>
    <div className='flex flex-col shad pl-6 pt-4 pb-2 border-4 border-yellow-700 rounded-xl m-2 '> 
      <div> <img src={CLG} alt="college" className='flex justify-center w-64 rounded-lg border-2 border-gray-500 h-44 '  />  </div>
      <div className='p-4'> <p className='w-64 text-white'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quos hic veniam? Optio, aspernatur ipsum sit possimus ad labore quidem consequatur eligendi delectus beatae consequuntur id ullam ea non exercitationem sint officiis.</p> </div>
      <button className='border-2 rounded-xl w-44 ml-10 mt-4 mb-2 text-yellow-600 hover:bg-yellow-500 hover:text-black'>ReadMore</button>
    </div>
    <div className='flex flex-col shad pl-6 pt-4 pb-2 border-4 border-yellow-700 rounded-xl m-2  '> 
      <div> <img src={skills} alt="skills" className='flex justify-center w-64 rounded-lg border-2 border-gray-500 h-44 ' /> </div>
      <div className='p-4'> <p className='w-64 text-white'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quos hic veniam? Optio, aspernatur ipsum sit possimus ad labore quidem consequatur eligendi delectus beatae consequuntur id ullam ea non exercitationem sint officiis.</p> </div>
      <button className='border-2 rounded-xl w-44 ml-10 mt-4 mb-2 text-yellow-600 hover:bg-yellow-500 hover:text-black'>ReadMore</button>
    </div>
  </div>
  </div>
);

export default Blogs