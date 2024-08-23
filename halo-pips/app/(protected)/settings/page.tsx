"use client";

import { useSession, signOut } from "next-auth/react";

const SettingsPage = () => {
  const session = useSession();
  const onClick = () => signOut();
  return (
    <div>
      {JSON.stringify(session)}
      <div>
        <h5>Are you sure you want to sign out?</h5>
        <button onClick={onClick}>Sign out</button>
      </div>
    </div>
  );
};

export default SettingsPage;
