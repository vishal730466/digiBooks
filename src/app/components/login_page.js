"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <div>
          <p>Welcome, {session.user.name}</p>
          <img src={session.user.image} alt="User avatar" width={50} />
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      ) : (
        <button style={{marginTop:"5%"}} onClick={() => signIn("github")}>Sign In with GitHub</button>
      )}
    </div>
  );
}
