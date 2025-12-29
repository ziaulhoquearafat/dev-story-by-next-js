"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);

  if (pathname.startsWith("/dashboard")) return <></>;

  return (
    <div className="p-4 border-2 border-gray-400 flex justify-between items-center">
      <header>
        <Link href={"/"} className="text-lg font-semibold">
          Dev-Story🐬
        </Link>
      </header>

      <nav className="space-x-5">
        <NavLink href="/about">About</NavLink>
        <NavLink href="/stories">Stories</NavLink>
        <NavLink href="/tutorials">Tutorials</NavLink>
        <NavLink href="/login">Login</NavLink>
        <NavLink href="/register">Register</NavLink>
      </nav>
    </div>
  );
};

export default Header;
