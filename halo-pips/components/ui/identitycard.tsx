"use client";
import React, { useEffect, useState } from 'react';

type UserProfile = {
  name: string;
  NIM: string;
  angkatan: string;
  status: string;
};

interface IdentityCardProps {
  id: string; // Menentukan tipe sebagai string
}

const IdentityCard: React.FC<IdentityCardProps> = ({ id }) => {
  const [userData, setUserData] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`/api/profile?id=${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch user data");
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

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
}

export default IdentityCard;
