"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  if (pathname.startsWith("/dashboard")) return <></>;
  return (
    <header className="px-4 py-3 border-b-2 border-gray-800 flex justify-between items-center">
      <Link href={"/"} className="text-lg font-semibold">
        Dev-Story
      </Link>
      <nav className="space-x-5">
        <NavLink href="/about">About</NavLink>
        <NavLink href="/login">Login</NavLink>
        <NavLink href="/register">Register</NavLink>
        <NavLink href="/stories">Stories</NavLink>
        <NavLink href="/tutorials">Tutorials</NavLink>
        <NavLink href="/dashboard">Dashboard</NavLink>
      </nav>
    </header>
  );
};

export default Header;
