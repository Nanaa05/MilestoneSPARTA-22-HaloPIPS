import React from 'react';
import IdentityCard from '@/components/ui/identitycard';
import RatingCard from '@/components/ui/ratingcard';
import { Avatar } from '@/components/ui/avatar';
import { MdEdit } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';
// dekstop
const page = () => {
  return (
    <div className='flex flex-row items-center justify-center bg-bgprofile w-full h-screen bg-cover'>
      <div className='w-1/2 flex flex-col items-center'>
        <Avatar />
        <IdentityCard />
        <div className='flex flex-row p-2'>
          <a href="#" className='bg-HMIF-600 m-2 w-10 h-10 rounded-sm flex items-center justify-center text-white text-4xl text-center'><FaLinkedin/></a>
          <a href="#" className='bg-HMIF-600 m-2 w-10 h-10 rounded-sm flex items-center justify-center text-white text-4xl text-center'><FaInstagram/></a>
          <div className='EditButton bg-HMIF-600 m-2 w-10 h-10 rounded-sm flex items-center justify-center text-white text-4xl text-center'>
              <a href="/editprofcard"><MdEdit/></a>
          </div>
        </div>
      </div>
      <div className='h-full w-[5px] bg-HMIF-500'></div>
      <div className='w-1/2 flex flex-col items-center'>
        <RatingCard />
      </div>
    </div>
  )
}

export default page
