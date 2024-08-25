"use client"
import React from 'react';

const IdentityCard = () => {
  return (
    // belum disambung ke back end
    <div className='bg-HMIF-600 flex flex-col items-start text-HMIF-100 rounded-xl p-4 w-3/5'>
      <h3 className='font-semibold'>Nama Lengkap</h3>
      <p className='font-normal text-2xl'>Lorem Ipsum Lorem</p>
      <h3 className='font-semibold'>Nama Panggilan</h3>
      <p className='font-normal text-2xl'>Lorem Ipsum Lorem</p>
      <h3 className='font-semibold'>NIM</h3>
      <p className='font-normal text-2xl'>Lorem Ipsum Lorem</p>
      <h3 className='font-semibold'>Angkatan</h3>
      <p className='font-normal text-2xl'>Lorem Ipsum Lorem</p>
      <h3 className='font-semibold'>Status</h3>
      <p className='font-normal text-2xl'>Lorem Ipsum Lorem</p>
    </div>
  )
}

export default IdentityCard;
