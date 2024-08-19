import React from 'react'

const LoginMember = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-[#3F684B]'>
      <h1 className='text-3xl font-bold text-white mb-8'>Login as Member HMIF</h1>
      <h3 className='font-semibold'>Username</h3>
      <input
          type='text'
          placeholder='Username'
          className='p-3 my-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#BCD66A]'
      />
      <h3 className='font-semibold'>Password</h3>
      <input
          type='password'
          placeholder='Password'
          className='p-3 my-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#BCD66A]' 
      />
      <button className='px-10 py-3 my-4 bg-[#89B262] border border-[#BCD66A] rounded-3xl text-black font-bold hover:bg-[#A5BF5A] transition duration-400'>Login</button>
    </div>
  )
}

export default LoginMember