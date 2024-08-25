import React from 'react';

const Page = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-bg1 bg-cover w-full h-screen'>
        <div className='bg-gray-700 flex flex-col items-center justify-center p-4 rounded-md'>
            <div className='flex flex-row p-2 items-center justify-between bg-HMIF-100 w-full mb-4 rounded-md'>
                <input 
                type='text' 
                placeholder='Nama Panggilan' 
                className='text-2xl font-bold text-gray-900 bg-HMIF-100 outline-none w-full'
                />
            </div>
            <div className='flex flex-row p-2 items-center justify-between bg-HMIF-100 w-full mb-4 rounded-md'>
                <input 
                type='text' 
                placeholder='instagram.com/................' 
                className='text-2xl font-bold text-gray-900 bg-HMIF-100 outline-none w-full'
                />
            </div>
            <div className='flex flex-row p-2 items-center justify-between bg-HMIF-100 w-full rounded-md'>
                <input 
                type='text' 
                placeholder='linkedin.com/in/................' 
                className='text-2xl font-bold text-gray-900 bg-HMIF-100 outline-none w-full'
                />
            </div>
        </div>
        <div className='saveeditbutton bg-HMIF-600 w-auto p-4 m-4 text-white rounded-xl'>
            <h1 className='font-semibold'>save</h1>
        </div>
    </div>
  );
}

export default Page;
