"use client"
import React from 'react'

const RatingCard = () => {
  return (
    // belum disambung ke back end
    <div className='flex flex-col items-center justify-center bg-HMIF-100 p-6 border rounded-xl max-w-md'>
      <div className='flex flex-row bg-HMIF-600 p-6 border rounded-t-xl w-full mb-1'>
        <div className='text-HMIF-100 flex-1 text-center'>
            <h1 className='text-5xl font-bold'>4.9</h1>
            <p className='text-xl'>/5</p>
        </div>
        <div className='flex-1 text-center'>
            <h1 className='text-HMIF-100 text-5xl font-bold'>123</h1>
            <p className='text-HMIF-400 text-xl'>Reviews</p>
        </div>
      </div>

      <div className='flex flex-row bg-HMIF-600 p-6 border rounded-b-xl w-full mt-1'>
        <div className='flex-shrink-0 mr-4'>
          <div className='bg-HMIF-400 w-16 h-16 rounded-full flex items-center justify-center text-white'>
            PP
          </div>
        </div>
        <div className='text-HMIF-400'>
          <h1 className='text-HMIF-100 font-bold text-lg'>Anonymous</h1>
          <p className='font-semibold text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente debitis deserunt reiciendis.
          </p>
        </div>
      </div>
    </div>
  )
}

export default RatingCard
