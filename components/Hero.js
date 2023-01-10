import React from 'react'

function Hero () {
  return (
    <div className='container'>
      <div className='absolute py-5 top-2/4 left-52 w-2/3 ml-10'>
        <h1 className='text-6xl font-sans tracking-tight text-white text-center font-semibold'>New arrivals are here</h1>
        <h1 className='text-xl my-3 text-center text-gray-100'>The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they're still in stock.</h1>
        <button className='bg-white mt-3 font-semibold rounded-lg p-3 px-8 ml-72'>Shop New Arrivals</button>
      </div>
      <img className='max-h-screen w-full' src="../image.jpg" alt="" />

    </div>
  )
}

export default Hero