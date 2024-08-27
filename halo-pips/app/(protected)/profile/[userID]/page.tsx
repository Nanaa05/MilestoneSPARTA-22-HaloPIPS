"use client";
import React, { useEffect, useState } from 'react';
import IdentityCard from '@/components/ui/identitycard';
import ButtonNav from '@/components/button';
import RatingCard from '@/components/ui/ratingcard';
import { Avatar } from '@/components/ui/avatar';

const UserProfilePage = () => {
  const id = '1'; //dummy
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchUserProfile = async () => {
        const response = await fetch(`/api/profile?id=${id}`);
        const data = await response.json();
        setUserProfile(data);
      };

      fetchUserProfile();
    }
  }, [id]);

  if (!userProfile) return <div>Loading...</div>;

  return (
    <div className='flex flex-row items-center justify-center bg-bgprofile w-full h-screen bg-cover'>
      <div className='w-1/2 flex flex-col items-center'>
        <Avatar />
        <IdentityCard id={userProfile} />
      </div>
      <div className='h-full w-[5px] bg-HMIF-500'></div>
      <div className='w-1/2 flex flex-col items-center'>
        <ButtonNav link='/Message' color='500'>Message</ButtonNav>
      </div>
    </div>
  );
};

export default UserProfilePage;
