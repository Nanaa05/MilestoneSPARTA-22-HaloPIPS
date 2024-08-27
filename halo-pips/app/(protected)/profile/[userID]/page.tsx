"use client";

import React, { useEffect, useState } from 'react'; 
import IdentityCard from '@/components/ui/identitycard';
import ButtonNav from '@/components/button';
import { Avatar } from '@/components/ui/avatar';

interface UserProfilePageProps {
  params: { userID: string };
}

const UserProfilePage: React.FC<UserProfilePageProps> = ({ params }) => {
  const { userID } = params;  // Mengambil userID dari parameter

  return (
    <div className='flex flex-row items-center justify-center bg-bgprofile w-full h-screen bg-cover'>
      <div className='w-1/2 flex flex-col items-center'>
        <Avatar />
        {/* Mengirimkan userID sebagai prop id ke IdentityCard */}
        <IdentityCard id={userID} />
      </div>
      <div className='h-full w-[5px] bg-HMIF-500'></div>
      <div className='w-1/2 flex flex-col items-center'>
        <ButtonNav link='/Message' color='500'>Message</ButtonNav>
      </div>
    </div>
  );
};

export default UserProfilePage;
