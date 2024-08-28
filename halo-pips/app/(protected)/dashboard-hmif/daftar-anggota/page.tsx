"use client"
import NavBar from '@/components/navbar/navBar';
import React, { useState, useEffect } from 'react';

const Page = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterYear, setFilterYear] = useState('All');
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const queryParams = new URLSearchParams();
        if (searchTerm) queryParams.append('name', searchTerm);
        if (filterYear !== 'All') queryParams.append('angkatan', filterYear);

        const response = await fetch(`/api/listUser?${queryParams.toString()}`);
        if (response.ok) {
          const data = await response.json();
          setMembers(data);
        } else {
          console.error("Failed to fetch members");
        }
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    fetchMembers();
  }, [searchTerm, filterYear]);

  return (
    <div className='flex flex-col items-center justify-center bg-bgprofile w-full h-screen bg-cover'>
      <NavBar />
      <h1 className='text-HMIF-600 font-semibold'>
        Ayo berbicara dengan Mahasiswa Jurusan!
      </h1>

      <div className='flex flex-row p-4'>
        <div className='bg-HMIF-500 p-2 rounded'>
          <select
            value={filterYear}
            onChange={(e) => setFilterYear(e.target.value)}
            className='p-2 rounded bg-white text-black'
          >
            <option value="All">Filter By Angkatan</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
          </select>
        </div>
        
        <div className='bg-HMIF-500 p-2 rounded ml-2'>
          <input
            type="text"
            placeholder="Search By Name/NIM"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='p-2 rounded bg-white text-black'
          />
        </div>
        
        <div className='bg-HMIF-500 p-2 rounded ml-2'>
          <button className='bg-HMIF-600 text-white p-2 rounded'>
            Chat
          </button>
        </div>
      </div>

      <div className='grid grid-cols-6 gap-4 mt-4'>
        {members.map((member, index) => (
          <div key={index} className='flex flex-col items-center'>
            <img
              src={`/path/to/member/image/${member.id}.jpg`}
              alt={member.name}
              className='w-20 h-20 rounded-full'
            />
            <span className='text-sm'>{member.angkatan}</span>
            <span className='text-sm'>{member.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
