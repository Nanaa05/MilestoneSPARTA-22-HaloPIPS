"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const EditProfilePage = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const [username, setUsername] = useState('');
  const [instagram, setInstagram] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`/api/profile?id=${id}`);
        const data = await response.json();
        setUsername(data.username || '');
        setInstagram(data.instagram || '');
        setLinkedin(data.linkedin || '');
        setLoading(false);
      } catch (error) {
        setError("Failed to load user data");
        setLoading(false);
      }
    };

    if (id) {
      fetchUserProfile();
    }
  }, [id]);

  const handleSave = async () => {
    try {
      const response = await fetch(`/api/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: id,
          username,
          instagram,
          linkedin,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      const updatedUser = await response.json();
      
      router.push(`/profile/${id}`);
    } catch (error) {
      setError("Failed to update profile");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='flex flex-col items-center justify-center bg-bgprofile bg-cover w-full h-screen'>
      <div className='bg-gray-700 flex flex-col items-center justify-center p-4 rounded-md'>
        <div className='flex flex-row p-2 items-center justify-between bg-HMIF-100 w-full mb-4 rounded-md'>
          <input 
            type='text' 
            placeholder='Nama Panggilan' 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='text-2xl font-bold text-gray-900 bg-HMIF-100 outline-none w-full'
          />
        </div>
        <div className='flex flex-row p-2 items-center justify-between bg-HMIF-100 w-full mb-4 rounded-md'>
          <input 
            type='text' 
            placeholder='instagram.com/................' 
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            className='text-2xl font-bold text-gray-900 bg-HMIF-100 outline-none w-full'
          />
        </div>
        <div className='flex flex-row p-2 items-center justify-between bg-HMIF-100 w-full rounded-md'>
          <input 
            type='text' 
            placeholder='linkedin.com/in/................' 
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            className='text-2xl font-bold text-gray-900 bg-HMIF-100 outline-none w-full'
          />
        </div>
      </div>
      <button 
        onClick={handleSave} 
        className='saveeditbutton bg-HMIF-600 w-auto p-4 m-4 text-white rounded-xl'
      >
        <h1 className='font-semibold'>Save</h1>
      </button>
    </div>
  );
}

export default EditProfilePage;
