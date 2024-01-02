"use client";

import React from "react";

import { SessionProvider } from "next-auth/react";

export default function AuthProvider({ children, session }: { children: React.ReactNode, session: any }) {
  console.log("AuthProvider", session);
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
