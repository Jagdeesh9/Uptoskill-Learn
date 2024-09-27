import React from 'react'


function Hero() {
  return (
    <div className='p-20 py-52 bg-gray-900 text-white flex items-center justify-center flex-col font-sans' id="hero">
        <h2 className='text-3xl lg:text-5xl text-center font-bold mb-2'>Hello I am mandeep</h2>
        <p className='text-center text-xl'>Learn the latest technology with interactive, hands-on courses. <span className='font-bold'>It’s free.</span></p>

        <div className='w-full flex items-center justify-center'><i></i><button className='py-2 w-full md:w-96 lg:w-96 lg:px-10 p-6 bg-blue-500 rounded-sm font-bold mt-10'>Log In with google </button></div>
        <span className='mt-3'>__________________<span className='text-xl uppercase'> or </span>__________________</span>
        <button className='py-2 w-full lg:w-96 md:w-96 lg:px-10 p-6 border border-blue-500 rounded-sm font-bold mt-3'>See more options</button>
    </div>
  )
}

export default Hero