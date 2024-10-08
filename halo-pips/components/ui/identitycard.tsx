"use client";
import React from 'react';

type UserProfile = {
  id: string
  name: string;
  NIM: string;
  angkatan: string;
  status: string;
};

interface IdentityCardProps {
  userData: UserProfile; // Menambahkan prop userData
}

const IdentityCard: React.FC<IdentityCardProps> = ({ userData }) => {
  return (
    <div className="bg-HMIF-600 text-HMIF-100 rounded-xl p-6 w-3/5 shadow-lg">
      <h3 className="font-semibold">Nama Lengkap</h3>
      <p className="font-normal text-2xl">{userData?.name || "N/A"}</p>
      <h3 className="font-semibold">Nama Panggilan</h3>
      <p className="font-normal text-2xl">{userData?.name || "N/A"}</p>
      <h3 className="font-semibold">NIM</h3>
      <p className="font-normal text-2xl">{userData?.NIM || "N/A"}</p>
      <h3 className="font-semibold">Angkatan</h3>
      <p className="font-normal text-2xl">{userData?.angkatan || "N/A"}</p>
      <h3 className="font-semibold">Status</h3>
      <p className="font-normal text-2xl">{userData?.status || "N/A"}</p>
    </div>
  );
};

export default IdentityCard;
