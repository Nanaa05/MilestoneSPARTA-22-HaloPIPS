"use client";

import React, { useEffect, useState } from 'react'; 
import IdentityCard from '@/components/ui/identitycard';
import ButtonNav from '@/components/button';
import { Avatar } from '@/components/ui/avatar';

interface UserProfile {
  id: string
  name: string;
  NIM: string;
  angkatan: string;
  status: string;
}

interface UserProfilePageProps {
  params: { userID: string };
}

const UserProfilePage: React.FC<UserProfilePageProps> = ({ params }) => {
  const { userID } = params;
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`/api/profile?id=${userID}`);
        if (!response.ok) {
          throw new Error("Failed to fetch user profile");
        }
        const data = await response.json();
        setUserProfile(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [userID]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex flex-row items-center justify-center bg-bgprofile w-full h-screen bg-cover'>
      <div className='w-1/2 flex flex-col items-center'>
        <Avatar />
        {/* Mengirimkan userProfile sebagai prop ke IdentityCard */}
        {userProfile && <IdentityCard userData={userProfile} />}
      </div>
      <div className='h-full w-[5px] bg-HMIF-500'></div>
      <div className='w-1/2 flex flex-col items-center'>
        <ButtonNav link='/Message' color='500'>Message</ButtonNav>
      </div>
    </div>
  );
};

export default UserProfilePage;
