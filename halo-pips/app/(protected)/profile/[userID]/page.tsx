import React from 'react';
import IdentityCard from '@/components/ui/identitycard';
import ButtonNav from '@/components/button';
import RatingCard from '@/components/ui/ratingcard';
import { Avatar } from '@/components/ui/avatar';

// dekstop
const page = () => {
  return (
    <div className='flex flex-row items-center justify-center bg-bgprofile w-full h-screen bg-cover'>
      <div className='w-1/2 flex flex-col items-center'>
        <Avatar />
        <IdentityCard />
      </div>
      <div className='h-full w-[5px] bg-HMIF-500'></div>
      <div className='w-1/2 flex flex-col items-center'>
        <RatingCard />
        <ButtonNav link='/Message' color='500'>Message</ButtonNav>
      </div>
    </div>
  )
}

export default page
