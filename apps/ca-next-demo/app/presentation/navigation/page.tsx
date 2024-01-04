"use client";

import { useSession } from "next-auth/react";
import Link from 'next/link';

const NavBar = (
  props: React.PropsWithChildren<{}>
): React.ReactElement => {
  const { children } = props;
  const { data: session, status } = useSession();
  const isLoggedIn = session && status === "authenticated";
  const isLoggedInClass = isLoggedIn ? "link active text-blue-500 hover:text-blue-800" : "link text-gray-400 pointer-events-none cursor-not-allowed";
  const isNotLoggedInClass = isLoggedIn ? "link text-gray-400 pointer-events-none cursor-not-allowed" : "link active text-blue-500 hover:text-blue-800";

  console.log("session", session, status);

  return (
    <div>
      <nav>
        <ul className="flex">
          <li className="mr-6">
            <Link className={`${isLoggedInClass}`} href="/presentation/customer/list">Customer</Link>
          </li>
          <li className="mr-6">
            <Link className={`${isNotLoggedInClass}`} href="/api/auth/signin">Sign In</Link>
          </li>
          <li className="mr-6">
            <Link className={`${isLoggedInClass}`} href="/api/auth/signout">Sign Out</Link>
          </li>
        </ul>
      </nav>
      <h1>Welcome to ca-next-demo!</h1>
      {children}
    </div>
  );
}

export default NavBar;
