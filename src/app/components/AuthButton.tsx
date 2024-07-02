"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";

const AuthButton: React.FC = () => {
  const { data: session } = useSession();
  const callbackUrl =
    typeof window !== "undefined" ? window.location.href : "/";

  if (session) {
    return <button onClick={() => signOut({ callbackUrl })}>Sign Out</button>;
  }
  return (
    <button onClick={() => signIn("google", { callbackUrl })}>Sign In</button>
  );
};

export default AuthButton;
