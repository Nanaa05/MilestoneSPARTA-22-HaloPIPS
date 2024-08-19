import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-[#3F684B]'>
      <h1 className='text-3xl font-bold text-white mb-8'>Login</h1>
      <div className='flex flex-row space-x-4'>
        <Link href='/tpb' className='p-4  bg-[#BCD66A] text-black font-semibold border border-white rounded-3xl mb-4 text-center w-48 hover:bg-[#89B262] transition duration-400'>Login as TPB</Link>
        <Link href='/memberhmif' className='p-4  bg-[#BCD66A] text-black font-semibold border border-white rounded-3xl mb-4 text-center w-48 hover:bg-[#89B262] transition duration-400'>Login as Member</Link>
      </div>
    </div>
  )
}

export default page
