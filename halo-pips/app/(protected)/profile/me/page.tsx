"use client"
import React,{ useEffect,useState } from 'react';
import IdentityCard from '@/components/ui/identitycard';
import RatingCard from '@/components/ui/ratingcard';
import { Avatar } from '@/components/ui/avatar';
import { MdEdit } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Link from 'next/link';


// dekstop
const page = () => {
  const router = useRouter();
  const { id } = router.query;
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
        <IdentityCard id={ userProfile }/>
        <div className='flex flex-row p-2'>
          <a href="#" className='bg-HMIF-600 m-2 w-10 h-10 rounded-sm flex items-center justify-center text-white text-4xl text-center'><FaLinkedin/></a>
          <a href="#" className='bg-HMIF-600 m-2 w-10 h-10 rounded-sm flex items-center justify-center text-white text-4xl text-center'><FaInstagram/></a>
          <div className='EditButton bg-HMIF-600 m-2 w-10 h-10 rounded-sm flex items-center justify-center text-white text-4xl text-center'>
              <Link href={`/editprofcard?id=${id}`}><MdEdit/></Link>
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
